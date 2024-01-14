import React, { useState } from 'react'
import InputMask from 'react-input-mask';

function BasicDay({ title, isActive, onToggle }) {
    const [time, setTime] = useState('');

    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        setTime(inputValue);
    };

    const [toggle, setToggle] = useState(isActive);
    const toggleClass = toggle ? "transform translate-x-4" : "";

    const handleToggle = () => {
        setToggle(!toggle);
        onToggle((prev) => !prev);
    };
    return (
        <div className={`flex bg-gray-100 dark:bg-gray-800 rounded-xl w-[734px] border-[3px] ${toggle ? "border-blue-500" : "border-gray-100 dark:border-gray-800"}`}>
            <div className="px-4 py-4 border-r-2 border-gray-200 dark:border-gray-700 w-48">
                <h4 className='text-gray-600 text-lg font-semibold dark:text-white'>{title}</h4>
            </div>
            <div className="flex p-4 gap-20">
                <label htmlFor="" className='flex items-center gap-4 text-gray-400 text-base'>
                    Открытие:
                    <InputMask
                        type="text"
                        id="timeInput"
                        mask="99:99"
                        placeholder="XX:XX"
                        value={time}
                        onChange={handleInputChange}
                        className='bg-transparent outline-none w-20'
                        disabled={!toggle}
                    />
                </label>
                <label htmlFor="" className='flex items-center gap-4 text-gray-400 text-base'>
                    Открытие:
                    <InputMask
                        type="text"
                        id="timeInput"
                        mask="99:99"
                        placeholder="XX:XX"
                        value={time}
                        onChange={handleInputChange}
                        className='bg-transparent outline-none w-20'
                        disabled={!toggle}
                    />
                </label>
                <div
                    className={`w-12 h-8 flex items-center rounded-full p-1 cursor-pointer ${toggle ? "bg-blue-600 dark:bg-blue-600" : "bg-gray-300"}`}
                    onClick={handleToggle}
                >
                    <div
                        className={`bg-white h-6 w-6 rounded-full shadow-md transform duration-300 ease-in-out ${toggleClass}`}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default BasicDay
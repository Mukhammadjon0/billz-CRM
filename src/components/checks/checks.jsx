import React, { useContext } from 'react'
import { checks } from '../../data'
import { StateContext } from '../../context';

function Checks() {
    const { check, setCheck } = useContext(StateContext)

    const handleSelect = (item) => {
        setCheck(item);
    };
    return (
        <div className='flex gap-20 px-8 py-10'>
            <h2 className='text-2xl text-gray-600 dark:text-white font-semibold'>Чек</h2>
            <div className="inline-flex mt-10 ml-24">
                {checks.map((item, index) => (
                    <div onClick={() => handleSelect(item.name)} className="flex flex-col">
                        <label key={index} className="flex items-center flex-col space-x-1 dark:text-white">
                            <input
                                type="radio"
                                value={item}
                                checked={check === item.name}
                                onChange={() => handleSelect(item.name)}
                                className="form-radio text-blue-500 dark:bg-transparent w-4 h-4"
                            />
                            <span>{item.name}</span>
                        </label>
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default Checks
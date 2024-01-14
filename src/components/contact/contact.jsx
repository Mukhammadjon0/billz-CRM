import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa6';
import InputMask from 'react-input-mask';
import { FaCircleXmark } from "react-icons/fa6";
import { StateContext } from '../../context';

function Contact() {
    const { setPhoneNumbers, phoneNumbers, setFacebook, setInstagram, setTelegram, setWebsite } = useContext(StateContext)

    const addPhoneNumber = () => {
        setPhoneNumbers((prevPhoneNumbers) => [...prevPhoneNumbers, '+998']);
    };

    const handlePhoneNumberChange = (index, value) => {
        const newPhoneNumbers = [...phoneNumbers];
        newPhoneNumbers[index] = value;
        setPhoneNumbers(newPhoneNumbers);
    };

    const removePhoneNumber = (index) => {
        const newPhoneNumbers = [...phoneNumbers];
        newPhoneNumbers.splice(index, 1);
        setPhoneNumbers(newPhoneNumbers);
    };
    return (
        <div className='flex gap-20 px-8 py-10'>
            <h2 className='text-2xl text-gray-600 dark:text-white font-semibold'>Контакты</h2>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <h3 className='text-lg text-gray-600 dark:text-white'>Телефоны</h3>
                    <div className="flex flex-wrap w-full gap-x-[7rem] gap-y-4">
                        {phoneNumbers.map((phoneNumber, index) => (
                            <div key={index} className="input-base w-[320px] flex items-center justify-between dark:bg-gray-800">
                                <InputMask
                                    type="text"
                                    id={`phoneInput-${index + 1}`}
                                    mask="+998 99 999-99-99"
                                    placeholder="+998 XX XXX XX XX"
                                    value={phoneNumber}
                                    onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
                                    className="bg-transparent outline-none mr-2 dark:text-white"
                                />
                                {index > 0 && (
                                    <button onClick={() => removePhoneNumber(index)} className="">
                                        <FaCircleXmark className='text-red-500 text-lg' />
                                    </button>
                                )}
                            </div>
                        ))}
                        <button onClick={addPhoneNumber} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl text-blue-500 flex items-center gap-4 w-[320px] justify-center">
                            <FaPlus /> Добавить телефон
                        </button>
                    </div>
                </div>
                <div className="flex gap-28">
                    <div className="flex flex-col gap-2">
                        <h3 className='text-lg text-gray-600 dark:text-white'>Facebook</h3>
                        <div className="input-base dark:bg-gray-800 w-[320px] flex items-center justify-between">
                            <input
                                onChange={(e) => setFacebook(e.target.value)}
                                type="text"
                                placeholder="Название страницы"
                                className="bg-transparent outline-none dark:text-white"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className='text-lg text-gray-600 dark:text-white'>Instagram</h3>
                        <div className="input-base dark:bg-gray-800 w-[320px] flex items-center gap-2 dark:text-white">
                            @
                            <input
                                onChange={(e) => setInstagram(e.target.value)}
                                type="text"
                                placeholder="Юзернейм"
                                className="bg-transparent outline-none dark:text-white"
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-28">
                    <div className="flex flex-col gap-2">
                        <h3 className='text-lg text-gray-600 dark:text-white'>Telegram</h3>
                        <div className="input-base dark:bg-gray-800 w-[320px] flex items-center gap-2 dark:text-white">
                            @
                            <input
                                onChange={(e) => setTelegram(e.target.value)}
                                type="text"
                                placeholder="Юзернейм"
                                className="bg-transparent outline-none dark:text-white"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className='text-lg text-gray-600 dark:text-white'>Сайт</h3>
                        <div className="input-base dark:bg-gray-800 w-[320px] flex items-center justify-between">
                            <input
                                onChange={(e) => setWebsite(e.target.value)}
                                type="text"
                                placeholder="Ссылка на сайт"
                                className="bg-transparent outline-none dark:text-white"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Contact
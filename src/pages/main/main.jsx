import React, { useContext } from 'react'
import Navbar from './navbar'
import { IoMdSearch } from "react-icons/io";
import { HiPlus } from "react-icons/hi";
import { FaCircleXmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"
import { StateContext } from '../../context';
function Main() {
    const { shop } = useContext(StateContext)
    const navigate = useNavigate()
    return (
        <div className='w-full h-screen'>
            <Navbar />
            <div className="flex flex-col p-8 gap-4 dark:bg-gray-900 h-full">
                <div className="flex w-full items-center gap-4">
                    <div className="flex items-center input-base dark:bg-gray-800 gap-4 w-5/6">
                        <IoMdSearch className='text-2xl' />
                        <input type="text" className='bg-transparent outline-none text-base w-full dark:text-white' placeholder='Название магазина' />
                    </div>
                    <button onClick={() => navigate("/add")} className='flex items-center gap-4 px-4 py-3 bg-blue-600 text-white rounded-xl w-1/6 text-lg'>
                        <HiPlus className='text-2xl' />
                        <span className='whitespace-nowrap'>
                            Новый магазин
                        </span>
                    </button>
                </div>
                <div className="flex flex-col w-full divide-y-2 divide-gray-200 dark:divide-gray-700 border-b-2 border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-8 px-4 py-3 border-t-2 border-gray-200 dark:border-gray-700 text-lg dark:text-gray-500">
                        <div className="col-span-4"><p>Магазин</p></div>
                        <div className="col-span-3"><p>Кол-во касс</p></div>
                        <div className="col-span-1"><p>Действие</p></div>
                    </div>
                    {shop.map((item, index) =>
                        <div className="py-3" key={index}>
                            <div className="grid grid-cols-8 px-4 py-2 bg-gray-100 dark:bg-gray-700 items-center rounded-2xl">
                                <div className="col-span-4">
                                    <h3 className='text-base text-blue-600 font-semibold'>{item.name}</h3>
                                </div>
                                <div className="col-span-3 dark:text-white"><p>{item.count}</p></div>
                                <div className="col-span-1">
                                    <div className="flex items-center justify-center w-9 h-9 bg-red-500 rounded-xl">
                                        <FaCircleXmark className='text-white text-base ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Main
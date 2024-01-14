import React from 'react'

import Logo from "../../assets/icons/logo.svg"
import LogoDark from "../../assets/icons/logo-dark.svg"
import { FaAngleLeft } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import Toggle from '../toggle/toggle';
function Sidebar() {
    return (
        <div className="w-64 flex flex-col bg-gray-100 dark:bg-gray-800 h-screen fixed top-0 left-0 justify-between">
            <div className="flex flex-col">
                <div className="px-8 py-12">
                    <div className="dark:hidden">
                        <img width={"115px"} src={Logo} alt="" />
                    </div>
                    <div className="hidden dark:block">
                        <img width={"115px"} src={LogoDark} alt="" />
                    </div>
                </div>
                <div className="flex gap-4 items-center px-8 py-4 cursor-pointer hover:bg-blue-100 text-gray-600 dark:text-white">
                    <FaAngleLeft />
                    <IoMdSettings className='text-blue-600' />
                    <span>Настройки</span>
                </div>
                <div className="flex gap-4 items-center px-8 py-4 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-600 dark:text-white">
                    <span>Профиль</span>
                </div>
                <div className="flex gap-4 items-center px-8 py-4 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-600 dark:text-white">
                    <span>Компания</span>
                </div>
                <div className="flex gap-4 items-center px-8 py-4 cursor-pointer bg-blue-100 dark:bg-gray-700 text-blue-500">
                    <span>Магазины</span>
                </div>
                <div className="flex gap-4 items-center px-8 py-4 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-600 dark:text-white">
                    <span>Кассы</span>
                </div>
                <div className="flex gap-4 items-center px-8 py-4 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-600 dark:text-white">
                    <span>Чеки</span>
                </div>
                <div className="flex gap-4 items-center px-8 py-4 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-600 dark:text-white">
                    <span>Валюты и оплата</span>
                </div>
                <div className="flex gap-4 items-center px-8 py-4 cursor-pointer hover:bg-blue-100 dark:hover:bg-gray-700 text-gray-600 dark:text-white">
                    <span>Товары</span>
                </div>
            </div>
            <div className="flex flex-col px-8 py-9">
                <div className="mb-4">
                    <Toggle />
                </div>
                <div className="flex items-center gap-3">
                    <span className='bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 rounded-full w-10 h-10 flex justify-center items-center'>ДО</span>
                    <div className="flex flex-col text-gray-600 dark:text-white text-base">
                        <p>Достонхон</p>
                        <p>Озодходжаев</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
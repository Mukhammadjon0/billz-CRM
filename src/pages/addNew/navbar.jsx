import React, { useContext } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom"
import { StateContext } from '../../context';
function Navbar() {
    const { addNewShop, name, size } = useContext(StateContext)
    const navigate = useNavigate()
    const isDisabled = () => {
        return !name || !size;
    }
    return (
        <nav className='px-8 py-10 border-b-2 border-gray-200 dark:border-gray-700 w-full dark:bg-gray-900 dark:text-white flex items-center justify-between sticky top-0 bg-white z-50'>
            <div className="flex items-center gap-4">
                <button onClick={() => navigate("/")} className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800">
                    <FaAngleLeft className='text-xl text-blue-500 dark:text-white' />
                </button>
                <h1 className='text-4xl font-semibold'>Настройки магазинов</h1>
            </div>
            <button
                onClick={addNewShop}
                disabled={isDisabled()}
                className={`px-8 py-3 rounded-xl text-lg text-gray-400 dark:bg-gray-800 ${isDisabled() ? "bg-gray-100" : "bg-blue-600 text-white"}`}
            >
                Создать
            </button>
        </nav >
    )
}

export default Navbar
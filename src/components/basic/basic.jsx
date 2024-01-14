import React, { useContext } from 'react'

import { days } from '../../data';
import BasicDay from './basicDay';
import { StateContext } from '../../context';
function Basic() {
    const { setName, setSize } = useContext(StateContext)
    const handleToggle = (index) => {
        const updatedDays = [...days];
        updatedDays[index].isActive = !updatedDays[index].isActive;
        console.log(updatedDays);
    };
    return (
        <div className='flex gap-20 px-8 py-10'>
            <h2 className='text-2xl text-gray-600 dark:text-white font-semibold'>Основные</h2>
            <div className="flex flex-col gap-8">
                <div className="flex gap-10 w-full justify-between">
                    <label htmlFor="" className='flex flex-col gap-4 text-lg text-gray-600 dark:text-white font-medium'>
                        Наименование
                        <input onChange={(e) => setName(e.target.value)} type="text" className='input-base outline-none dark:bg-gray-800 dark:text-white' placeholder='Введите наименование' />
                    </label>
                    <label htmlFor="" className='flex flex-col gap-4 text-lg text-gray-600 dark:text-white font-medium'>
                        Квадратура
                        <input onChange={(e) => setSize(e.target.value)} type="text" className='input-base outline-none dark:bg-gray-800 dark:text-white' placeholder='Введите квадратуру' />
                    </label>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className='text-lg text-gray-700 font-medium dark:text-white'>Режим работы</h4>

                    <div className="flex flex-col gap-2">
                        {days.map((item, index) => <BasicDay key={index} {...item} onToggle={() => handleToggle(index)} />)}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Basic
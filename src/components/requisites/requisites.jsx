import React, { useContext } from 'react'
import { FaPlus } from 'react-icons/fa6'
import { StateContext } from '../../context';

function Requisites() {
    const { setRequisites, requisites, bankDetails, setBankDetails, setPostIndex, setUniName, setAddress, setCountry } = useContext(StateContext)

    const addBankDetails = () => {
        setBankDetails([...bankDetails, { accountNumber: '', bankName: '' }]);
    };

    const handleInputChange = (index, field, value) => {
        const updatedBankDetails = [...bankDetails];
        updatedBankDetails[index][field] = value;
        setBankDetails(updatedBankDetails);
    };
    const isAddButtonDisabled = () => {
        const lastBankAccount = bankDetails[bankDetails.length - 1];
        return lastBankAccount.accountNumber === '' || lastBankAccount.bankName === '';
    };

    return (
        <div className='flex gap-20 px-8 py-10'>
            <h2 className='text-2xl text-gray-600 dark:text-white font-semibold'>Реквизиты</h2>
            <div className="flex flex-col gap-8">
                <div className="flex gap-28">
                    <div className="flex flex-col gap-4">
                        <h3 className='text-lg text-gray-600 dark:text-white'>Магазин имеет уникальные реквизиты</h3>
                        <div className="flex w-[320px] bg-gray-100 dark:bg-gray-800 rounded-xl p-1 gap-2">
                            <button onClick={() => setRequisites(true)} className={`flex cursor-pointer p-3 w-1/2 rounded-xl items-center justify-center ${requisites ? "bg-white shadow-lg dark:bg-gray-900" : "bg-transparent"} `}>
                                <span className='font-medium text-base text-gray-600 dark:text-white'>Да</span>
                            </button>
                            <button onClick={() => setRequisites(false)} className={`flex cursor-pointer p-3 w-1/2 rounded-xl items-center justify-center ${requisites ? "bg-transparent" : "bg-white shadow-lg dark:bg-gray-900 dark:bg-gray-900"} `}>
                                <span className='font-medium text-base text-gray-600 dark:text-white'>Нет</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className='text-lg text-gray-600 dark:text-white'>Юридическое название компании</h3>
                        <input onChange={(e) => setUniName(e.target.value)} type="text" className='input-base dark:bg-gray-800 dark:text-white outline-none' placeholder='Введите название' />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className='text-lg text-gray-600 dark:text-white'>Юридический адрес</h3>
                    <input onChange={(e) => setAddress(e.target.value)} type="text" className='input-base dark:bg-gray-800 outline-none dark:text-white' placeholder='Город, район, улица, дом' />
                </div>
                <div className="flex justify-between">
                    <select onChange={(e) => setCountry(e.target.value)} name="" className='input-base w-[320px] dark:bg-gray-800 dark:text-white' id="">
                        <option value="">Узбекистан</option>
                    </select>
                    <input onChange={(e) => setPostIndex(e.target.value)} type="text" className='input-base w-[320px] dark:bg-gray-800 outline-none dark:text-white' placeholder='Введите почтовый индекс' />
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className='text-lg text-gray-600 dark:text-white'>Банковский счет</h3>
                    {bankDetails.map((item, index) => (
                        <div className="flex flex-col divide-y-2 divide-gray-300 dark:divide-gray-700">
                            <input
                                type="text"
                                className='rounded-t-xl bg-gray-100 px-4 py-3 outline-none dark:bg-gray-800 dark:text-white'
                                placeholder='Введите банковский счет'
                                value={item.accountNumber}
                                onChange={(e) => handleInputChange(index, 'accountNumber', e.target.value)}
                            />
                            <input
                                type="text"
                                className='rounded-b-xl bg-gray-100 px-4 py-3 outline-none dark:bg-gray-800 dark:text-white'
                                placeholder='Название банка и филиал'
                                value={item.bankName}
                                onChange={(e) => handleInputChange(index, 'bankName', e.target.value)}
                            />
                        </div>
                    ))}
                    <button
                        onClick={addBankDetails}
                        disabled={isAddButtonDisabled()}
                        className={`flex justify-center items-center gap-2 w-full py-3 rounded-xl ${isAddButtonDisabled() ? "text-gray-400 bg-gray-100" : "text-blue-500 bg-gray-200"}`}
                    >
                        <FaPlus /> Добавить еще один банковский счет
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Requisites
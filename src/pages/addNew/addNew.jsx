import React from 'react'
import Navbar from './navbar'
import Basic from '../../components/basic/basic'
import Contact from '../../components/contact/contact'
import Requisites from '../../components/requisites/requisites'
import Checks from '../../components/checks/checks'

function AddNew() {
    return (
        <div className='w-full'>
            <Navbar />
            <div className="divide-y-2 divide-gray-200 dark:bg-gray-900 dark:divide-gray-700">
                <Basic />
                <Contact />
                <Requisites />
                <Checks />
            </div>
        </div>
    )
}

export default AddNew
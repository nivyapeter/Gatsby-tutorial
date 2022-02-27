import React from 'react'
import { TITLE } from '../constants'
import logo from  '../images/logo.svg' 

export default function Header() {
    return (
        <div className="flex w-full bg-white justify-between flex-row m-auto py-4 px-24 ">
            <div>
                <img className="w-3/5"src={logo}/>
                <span className="text-sm text-gray-500 pl-12">{TITLE}</span>
            </div>
    
         </div>
       
    )
}

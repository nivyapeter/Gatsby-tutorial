import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import '../styles/home.css'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />
         <div className= {StyleSheet.header}>
             {children}
         </div>
            <footer>
                <p>Copyright 2021 web warrior</p>
            </footer>
        </div>
    )
}
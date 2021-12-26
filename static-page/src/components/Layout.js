import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'
import '../styles/home.modules.css'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Navbar />
         <div className="content">
             {children}
             <img src="/banner.png"  style={{maxWidth:'100%'}}/>
         </div>
            <footer>
                <p>Copyright 2021 web warrior</p>
            </footer>
        </div>
    )
}
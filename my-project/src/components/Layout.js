import React from 'react'
import Header from './Header'

export default function Layout({children}) {
    return (
        <div className="layout">
            <Header />
            <div>
                {children}
            </div>
            <footer>
                {/* <p>Copy</p> */}
            </footer>
            
        </div>
    )
}

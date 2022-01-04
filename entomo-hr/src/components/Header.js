import React from 'react'
import { TITLE } from '../constants'
import logo from  '../images/logo.svg' 
import * as styles from '../styles/style.module.css'
import NavBar from './NavBar'

let navItems =["entomo","solutions","inspiration","about us",]


export default function Header() {
    return (
        <div className="container">
            <div className={styles.navheader}>
                <img src={logo} style={{width:'31vh'}}/>
                <span style={{float:'right',color:'#666'}}>{TITLE}</span>
            </div>
            <div>
                <NavBar />
            </div>
         </div>
       
    )
}

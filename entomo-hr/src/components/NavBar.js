import React from 'react'
import {BiChevronDown } from "react-icons/bi";
import * as styles from '../styles/style.module.css'
import img from "../images/worldwide (1).png";

let navItems =["entomo","solutions","inspiration","about us",]

export default function NavBar() {
    return (
        <div>
            <ul className = {styles.navBar}>
            {navItems.map((navitem) => {
                return (
                    <a href="">
                      <li style={{padding:"20px",color:"#4d4d4d",fontSize:"16px",fontFamily:"AvenirNextLTW01-Medium",fontWeight:"bold"}}>{navitem}
                      <span style={{paddingTop:"5px",paddingLeft:"7px"}}><BiChevronDown /></span>
                      </li>
                   </a>
                )
            })}
            <li style={{padding:"20px",color:"#4d4d4d",fontSize:"16px",fontFamily:"AvenirNextLTW01-Medium",fontWeight:"bold"}}>
                <a href="">
                contact
                </a>
            </li>
            <li style={{padding:"14px",fontSize:"16px",fontFamily:"AvenirNextLTW01-Medium",fontWeight:"bold"}}>
                <a className={styles.requestDemo} href="">
                request demo
                </a>
            </li>
            <li>
                <a href="">
                <img src={img} />
                <span style={{marginBottom:"5px",paddingLeft:"7px"}}><BiChevronDown /></span>
                </a>
            </li>
            </ul>
        </div>
    )
}

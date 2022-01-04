import React from 'react'
import * as styles from "../styles/style.module.css";
import { TEAMLINK } from '../constants'
export default function Button({title,color,bg}) {
    return (
        <div>
            <a href={TEAMLINK}>
            <button className={styles.teamButton} style={{backgroundColor:bg,color:color}}>{title}</button>
            </a>
        </div>
    )
}

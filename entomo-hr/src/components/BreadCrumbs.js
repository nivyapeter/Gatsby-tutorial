import React from 'react'
import * as styles from '../styles/style.module.css'
import { HOMELINK,SOLUTIONLINK } from '../constants'
export default function BreadCrumbs({text1,text2,text3}) {
    return (
        <div className={styles.breadcrumbs}>
            <a href={HOMELINK}>{text1}</a> / <a hre={SOLUTIONLINK}>{text2}</a> / <b>{text3}</b>
            
        </div>
    )
}

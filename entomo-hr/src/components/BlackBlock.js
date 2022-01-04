import React from "react";
import * as styles from "../styles/style.module.css";

let headings = [
  "better workforce planning",
  "improve performance, productivity & engagement",
  "drive consumer grade employee experiences",
  "increase employee retention",
];
export default function BlackBlock() {
  return (
    <div style={{backgroundColor:"black", display:"flex",padding:"0rem 5rem"}}>
      
      {headings.map((heading) => {
        
          return (
            <div className={styles.iconSection2}>
               <div className={styles.icon1}></div>
               <h2 className={styles.blackBlockHeading}>{heading}</h2>
            </div>
              
          );
      })}
    </div>
  );
}

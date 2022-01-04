import React from "react";
import * as styles from "../styles/style.module.css";

export default function DataImg1({
  body,
  sideImg,
  heading,
  subhead1,
  flexDirection,
  
}) {
  console.log(body);
  return (
    <div
      className={styles.dataimgmain}
      style={{ flexDirection: flexDirection }}
    >
      <div className={styles.textsection}>
        <h1 className={styles.dataheading}>{heading}</h1>
        <p className={styles.textparagrapgh}>{body}</p>
        <div className={styles.subdata}>
          <p>{subhead1}</p>
        </div>
      </div>
      <div className={styles.imgsection}>
        <img src={sideImg} />
      </div>
    </div>
  );
}

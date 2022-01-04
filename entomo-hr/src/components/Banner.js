import React from "react";
import * as styles from "../styles/style.module.css";


function Banner({ bgImg, width, title, subtitle,fontSize,color,marginBottom,fontSizePara }) {
  return (
    <div className={styles.bannermainsection}>
      <img className="desktop-img" src={bgImg} style={{ width: width }} />
      <img className="mob-img" src="" />
      <div className={styles.banner_text}>
        <h1 className={styles.bannerHeadText} style ={{fontSize:fontSize,color:color,marginBottom:marginBottom}}>{title}</h1>
        <p className={styles.bannerSubText} style={{fontSize:fontSizePara,color:color}}>{subtitle}</p>
       
      </div>
    </div>
  );
}
export default Banner;

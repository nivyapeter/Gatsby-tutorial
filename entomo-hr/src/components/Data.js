import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import * as styles from "../styles/style.module.css";
let contents = [
  "forecasting demand to build the right human capital strategy",
  "acquiring the right talent aligned with corporate strategy",
  "predicting employee productivity",
  "correlating employee engagement and revenue ",
  "correlating employee engagement and revenue ",
  "predicting high potential talent",
  "predicting employee attrition",
];


export default function Data() {
  return (
    <div>
      {contents.map((content) => {
        console.log(content);
        return (
          <div>
            <p class={styles.textIcon}>
              <span class={styles.iconSection}>
                <FaCheckCircle />
              </span>
              {content}
            </p>
          </div>
        );
      })}
    </div>
  );
  

}

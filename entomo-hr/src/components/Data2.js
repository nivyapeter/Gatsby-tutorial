import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import * as styles from "../styles/style.module.css";
let secondContents = [
  "a fully automated and guided platform that can run on mobile apps and browsers ",
  "consumer grade consumption requiring no data science knowledge ",
  "create data models in few mins vs. weeks ",
  "derive and deliver nudges and insights to all",
  "ensure action from analytics ",
];

export default function Data2() {
  return (
    <div>
      {secondContents.map((secondContent) => {
        return (
          <div>
            <p class={styles.textIcon}>
              <span class={styles.iconSection}>
                <FaCheckCircle />
              </span>
              {secondContent}
            </p>
          </div>
        );
      })}
    </div>
  );
}

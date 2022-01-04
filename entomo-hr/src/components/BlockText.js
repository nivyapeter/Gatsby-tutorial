import React from "react";
import * as styles from "../styles/style.module.css";
export default function BlockText({
  heading,
  subheading1,
  subheading2,
  paragraphtext,
}) {
  return (
    <div
      style={{
        backgroundColor: "#0064bf",
        color: "white",
        padding: "5rem 5rem",
      }}
    >
      <h1 style={{ fontSize: "48px", fontWeight: "500" }}>{heading}</h1>
      <br />
      <br />
      <h2 className={styles.blokSubText}>{subheading1}</h2>
      <br />
      <br />
      <h2 className={styles.blokSubText}>{subheading2}</h2>
      <div>{paragraphtext}</div>
    </div>
  );
}

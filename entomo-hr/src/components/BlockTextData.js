import React from "react";
import img from "../images/Group-o.png";
import * as styles from "../styles/style.module.css";
let firstDetails = [
  {
    title: " performance management",
    data: "track how each employee and team is performing. You can track employee performance through features like 360 reviews (feedback), goal tracking, 1:1s, feedback etc.",
  },
  {
    title: "  employee engagement ",
    data: "understand and track how your employees engage with the organization. Administer pulse surveys, Employee Net Promoter Score and other important metrics of employee engagement",
  },
  {
    title: "  org charts",
    data: "create dynamic, real-time org charts that are always up to date. Add customizations or filters to ensure you’re meeting your DEI and other requirements.",
  },
  {
    title: "  salary benchmarks",
    data: "create appropriate salary ranges for each employee and role. Build career plans around them that help plan and budget for promotions, raises, etc.  ",
  },
  
];

let secondDetails = [
  {
    title: "  integrations & Reports ",
    data: "connect to a variety of data sources to maximize data tracking and analytics, find insights, and develop reports to visualize trends, gaps, and opportunities.",
  },
  {
    title: "   shareability ",
    data: "easily share insights and reports. You can share widgets, download visuals for presentations, and more.",
  },
  {
    title: "  security",
    data: "Manage and track your team’s competencies. Allow teams to collaborate in editing the skill proficiencies by demonstrating their abilities while performing the role.",
  },
  {
    title: "  predictive analytics",
    data: "pull data from different systems into our data lake to identify what future outcomes will look like. This is done using a combination of machine learning, visualization, and augmented intelligence. ",
  },
  {
    title: "  variety of KPIs",
    data: "measure and track KPIs on everything that matters, from staffing to employee experiences",
  },
];
export default function BlockTextData() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop:"44px"
      }}
    >
      <div>
        {firstDetails.map((firstDetail) => {
          return (
            <div>
              
              <h3 className={styles.blockSubHead}>
              <img src={img} />
                {firstDetail.title}
              </h3>
              <p className={styles.blockSubHeadPara}>{firstDetail.data}</p>
            </div>
          );
        })}
      </div>
      <div>
        {secondDetails.map((secondDetail) => {
          return (
            <div>
              <h3 className={styles.blockSubHead}>
              <img src={img} />
                {secondDetail.title}
              </h3>
              <p className={styles.blockSubHeadPara}>{secondDetail.data}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

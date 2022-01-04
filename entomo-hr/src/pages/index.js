import React from "react";
import Banner from "../components/Banner";
import "../styles/style.css";
import img from "../images/PEOPLE ANALYTICS.png";
import teamimg from "../images/Team_back-1.png";
import Layout from "../components/Layout";
import BreadCrumbs from "../components/BreadCrumbs";
import DataImg1 from "../components/DataImg1";
import * as styles from "../styles/style.module.css";
import Data from "../components/Data";
import BlockText from "../components/BlockText";
import BlockTextData from "../components/BlockTextData";
import BlackBlock from "../components/BlackBlock";
import Data2 from "../components/Data2";
import Button from "../components/Button";

export default function () {
  return (
    <Layout>
      <div>
        <div className="bannersection">
          <Banner
            bgImg={img}
            width="100vw"
            title="people analytics tools"
            subtitle="build a data driven organization for sustainable growth"
          />
        </div>
        <div className="breadcrumbsSection">
          <BreadCrumbs
            text1="home"
            text2="solutions"
            text3="people analytics tool"
          />
        </div>
        <div className="datatextsection">
          <DataImg1
            body="entomo’s hr analytics tools help human resource professionals collect, analyse and generate insights on key people metrics."
            sideImg="https://webuat.entomo.co/wp-content/uploads/2021/09/Power.png"
          />
        </div>
        <div className={styles.datatextsection1}>
          <DataImg1
            heading="why entomo people analytics? "
            body="entomo people analytics is built to be a goal-focused method of studying people processes, functions, challenges, and opportunities at work for measurable business impact. These include."
            sideImg="https://webuat.entomo.co/wp-content/uploads/2021/09/Group-2928.png"
            subhead1={<Data />}
            flexDirection="row-reverse"
            // paddingRight="10rem"
          />
        </div>
        <div style={{ marginTop: "6rem" }}>
          <BlockText
            heading="how is entomo people analytics different?"
            subheading1="we drive action from analytics. entomo is unique in being a enterprise platform with social media like features that deliver contextual and time relevant insights, in addition to hyper-personalized data visualization."
            subheading2="the insights and nudges are delivered directly to the user on a mobile app, email, application browser etc. which drives action from analytics than them being just another data point."
            paragraphtext={<BlockTextData />}
          />
        </div>
        <div>
          <BlackBlock />
        </div>
        <div>
          <DataImg1
            heading="realize instant benefits from entomo people analytics framework"
            subhead1={<Data2 />}
            sideImg="https://webuat.entomo.co/wp-content/uploads/2021/09/Power.png"
          />
        </div>
        <div className={styles.teamSection}>
          <div>
          <Banner
            bgImg={teamimg}
            width="100%"
            title="for small teams working on game changing innovations"
            subtitle="explore our pre-configured editions that are designed to help you accomplish targeted objectives."
            fontSize="35px"
            color="white"
            marginBottom="20px"
            fontSizePara = "18px"
          />
          </div>
          <div>
          <Button 
         title="check it out"
         color="black"
         bg="yellow"
        />
          </div>
         

        </div>
      </div>
    </Layout>
  );
}

import * as React from "react"
import HomeBanner from "../components/HomeBanner"
import Layout from "../components/Layout"
import img from "../images/homebanner.jpg"
import mobimg from "../images/homebannermob.jpg"
import performimg from "../images/Group 2876.svg"
import EnterpiseBlueBlk from "../components/EnterpiseBlueBlk"
import awardImg from "../images/Group 3036.png"
import awardMob from "../images/Group 3037.png"
import Award from "../components/Award"
import badgeImg from "../images/Badge-2.png"
import BadgeSection from "../components/BadgeSection"
import SpringAward from "../components/SpringAward"
import aspireImg from "../images/aspire role1.png"
import highperfomerImg from "../images/highperfomer.png"
import leaderImg from "../images/leader.png"
import leadspringImg from "../images/leaderspring.png"
import usersImg from "../images/users.png"
import BlackLady from "../components/BlackLady"
import blklady from "../images/blacklady.jpg"
import blkladymob from "../images/blkladymob.png"
import TotalEcnomic from "../components/TotalEcnomic"
import bgImg from "../images/products_pre_footer.png"
import LookingForInfo from "../components/LookingForInfo"
import Ourproducts from "../components/Ourproducts"
import perfomanceImg from "../images/perfomance.png"
import insightsImg from "../images/insight.png"
import carreersImg from "../images/carreers.png"
import safetyImg from "../images/safety.png"
import CheckItOut from "../components/CheckItOut"
import teamImg from "../images/Team_back.png"
import Banner from "../components/Banner"


export default function IndexPage() {
  return (
    <Layout>
      <div className="font-sans">
        {/* <HomeBanner
          bgImg={img}
          mobImg={mobimg}
          title="modern performance management
         software"
          subtitle="built for the future of work"
          perfomanceLink="https://webuat.entomo.co/solutions/everyday-performance/"
          argumentLink="https://webuat.entomo.co/solutions/everyday-insights/"
          carrerLink="https://webuat.entomo.co/solutions/careers-tomorrow/"
          performimg={performimg}
          text="performance management"
        /> */}
        <Banner 
        bgImg={img}
        mobImg={mobimg}
        title="modern performance management
         software"
         subtitle="built for the future of work"
          perfomanceLink="https://webuat.entomo.co/solutions/everyday-performance/"
          argumentLink="https://webuat.entomo.co/solutions/everyday-insights/"
          carrerLink="https://webuat.entomo.co/solutions/careers-tomorrow/"
          performimg={performimg}
          text="performance management"
        />
      </div>
      
      {/* <div className="h-[100vh] md:h-[37vh] lg:h-[64vh] xl:h-[48vh] bg-[#0064bf] ">
        <EnterpiseBlueBlk />
      </div>
      <div>
        <Award
          bgImg={awardImg}
          mobImg={awardMob}
          firsttext="our platform has been named as the"
          secondtext="‘Most valuable Technical Innovation in Response To Covid 19’"
          thirdtext="An acknowledgement of the impact that our platform has had in UAE’s response to covid 19"
        />
      </div>
      <div className="h-auto w-full bg-[gray] xl:p-[3rem]">
        <BadgeSection
          bgImg={badgeImg}
          firstText="entomo recognized as a leader in G2.com’s
         Asia Pacific grid for"
          secondText="Performance Management"
          thirdText="G2.com is world’s top business software review and comparison website"
        />
      </div>
      <div className="p-16 bg-[#5a5a5a]">
        <SpringAward
          heading="voted world's best in spring 2021 G2 awards"
          textone="#1 in Strategic Planning"
          texttwo="#3 in Career Management"
          textthree="#1 in Performance Management(Asia)"
          textfour="#6 in Objective & Key Results (OKR)"
          textfive="#5 Overall"
          aspireImg={aspireImg}
          highperfomerImg={highperfomerImg}
          leaderImg={leaderImg}
          leadspringImg={leadspringImg}
          usersImg={usersImg}
        />
      </div>
      <div>
        <BlackLady
          bgImg={blklady}
          blkladymob={blkladymob}
          heading="evolving enterprises of tomorrow"
          lefttext="engage and align goals"
          righttext="empower with nudges"
          downtext="enable personal growth"
        />
      </div> */}
      {/* <div>
        <TotalEcnomic 
        heading="The Total Economic Impact™ (TEI)
        of the entomo platform"
        text="by Forrester Research"
        />
      </div> */}
      {/* <div>
        <LookingForInfo 
        bgImg={bgImg}
        heading = "looking for more information?"
        sidetext="connect with our team to get an in-depth
        understanding of all the features."
        sidetexttwo="connect with our team to get an in-depth
        understanding of all the features."
        />
      </div> */}
      {/* <div>
        <Ourproducts 
        perfomanceImg={perfomanceImg}
        insightsImg={insightsImg}
        carreersImg={carreersImg}
        safetyImg={safetyImg}
        heading="our products"
        linkText="know more "
        />
      </div> */}
      {/* <div>
        <CheckItOut 
        bgImg={teamImg}
        heading="for small teams working on game-changing innovations"
        description="explore our pre-configured editions that are designed to help you accomplish targeted objectives."
        />
      </div> */}
    </Layout>
  )
}

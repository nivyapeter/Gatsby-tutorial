import * as React from "react"
import HomeBanner from "../components/HomeBanner";
import HomeButton from "../components/HomeButton";
import Layout from "../components/Layout";
import img from "../images/homebanner.jpg";
import mobimg from "../images/homebannermob.jpg";


export default function IndexPage() {
  return (
    <Layout>
      <div className="font-sans">
        <HomeBanner
        bgImg={img}
        mobImg={mobimg}
        title="modern performance management
         software"
        subtitle="built for the future of work"
        />
        <HomeButton />
      </div>
    </Layout>
  )
}
import React from "react"
import { Link } from "gatsby"
import HomeButton from "../components/HomeButton"
export default function HomeBanner({
  bgImg,
  title,
  subtitle,
  mobImg,
  performimg,
  perfomanceLink,
  text,
}) {
  return (
    <div className="relative w-full ">
      <img className="relative sm:block  hidden w-full" src={bgImg} />
      <img className="relative w-full sm:hidden block" src={mobImg} />
      <div className=" text-black-600 font-bold absolute lg:pl-24 top-9 pt-[7rem] px-[3rem] m-auto  pr-16 pt-10 sm:pb-0">
        <h1 className=" w-1/2 md:w-7/12 xl:w-[80%] xl:text-[56px] xl:leading-[1.3] text-[30px]">
          {title}
        </h1>
        <p className="xl:text-[2.2rem] lg:w-4/5 text-[22px] w-[51vw] leading-[1.75rem] text-[#4b4219] pt-5 font-normal ">
          {subtitle}
        </p>
        <div>
          <HomeButton
            text="let’s get started"
            link="https://webuat.entomo.co/contact/"
            margintop="1.75rem"
            
          />
        </div>
      </div>
      <div className="xl:pt-28 xl:block  xl:min-w-[60%] xl:flex xl:flex-row xl:columns-8 hidden xl:justify-between	absolute xl:top-96 xl:pl-12">
        <Link to={perfomanceLink}>
          <div className="flex flex-row justify-between items-center">
            <img className="pr-3" src={performimg} />
            <p className="text-sm text-blue-600 font-bold hover:text-white">
              {text}
            </p>
          </div>
        </Link>
        <Link to={perfomanceLink}>
          <div className="flex flex-row justify-between items-center">
            <img className="pr-3" src={performimg} />
            <p className="text-sm hover:text-white text-blue-600 font-bold">
              {text}
            </p>
          </div>
        </Link>
        <Link to={perfomanceLink}>
          <div className="flex flex-row justify-between items-center">
            <img className="pr-3" src={performimg} />
            <p className="text-sm hover:text-white text-blue-600 font-bold">
              {text}
            </p>
          </div>
        </Link>
      </div>
      
    </div>
  )
}

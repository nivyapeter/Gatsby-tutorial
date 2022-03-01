import { Link } from "gatsby"
import React from "react"
import intersectionImg from "../images/intersection.png"

export default function Ourproducts({
  heading,
  linkText,
  perfomanceImg,
  insightsImg,
  carreersImg,
  safetyImg,
}) {
  return (
    <div className="text-[#fff] bg-[#0064bf] w-full m-[auto]">
      <div className="pt-[4%] pb-[30px] m-[auto] max-w-[85%]">
        <div className="w-full ">
          <div className="pl-[15px] text-[35px] pb-[20px] mb-[25px] text-[#ffffff]">
            {heading}
          </div>
        </div>
        <div className="flex">
          <div className="pb-[20px] w-3/12">
            <img src={perfomanceImg} alt="perfomanceimage"/>
            <div className="h-[27px] leading-[1.6] pt-[20px] text-[#ffffff] text-[19px] pb-[10%] font-extrabold">
              everyday performance
            </div>
            <Link
              className="text-[#ffda00] hover:text-[#337ab7] font-bold"
              to="https://entomo.co/solutions/everyday-performance/"
            >
              {linkText}
            </Link>
          </div>
          <div className="pb-[20px] w-3/12">
            <img src={insightsImg} alt="insightimage"/>
            <div className="h-[27px] leading-[1.6] pt-[20px] text-[#ffffff] text-[19px] pb-[10%] font-extrabold">
              everyday insights
            </div>
            <Link
              className="text-[#ffda00] hover:text-[#337ab7] font-bold"
              to="https://entomo.co/solutions/everyday-insights/"
            >
              {linkText}
            </Link>
          </div>
          <div className="pb-[20px] w-3/12">
            <img src={carreersImg} alt="carrerimage"/>
            <div className="h-[27px] leading-[1.6] pt-[20px] text-[#ffffff] text-[19px] pb-[10%] font-extrabold">
              careers tomorrow
            </div>
            <Link
              className="text-[#ffda00]  hover:text-[#337ab7] font-bold"
              to="https://entomo.co/solutions/careers-tomorrow/"
            >
              {linkText}
            </Link>
          </div>
          <div className="pb-[20px] w-3/12">
            <img src={safetyImg} alt="safetyimage"/>
            <div className="h-[27px] leading-[1.6] pt-[20px] text-[#ffffff] text-[19px] pb-[10%] font-extrabold">
              first safety
            </div>
            <Link
              className="text-[#ffda00] hover:text-[#337ab7] font-bold"
              to="https://entomo.co/solutions/workplace-safety/"
            >
              {linkText}
            </Link>
          </div>
        </div>
      </div>
      <div>
          <img className="absolute w-[14%] m-0 bottom-0 right-0" src={intersectionImg} />
      </div>
    </div>
  )
}

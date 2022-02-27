import React from "react"
import HomeButton from "./HomeButton"


export default function BlackLady({bgImg,blkladymob,heading,lefttext,righttext,downtext}) {
  return (
    <div className="relative">
      <div className="relative">
        <img className="sm:block hidden" src={bgImg} />
        <img className="sm:hidden block" src={blkladymob} />
      </div>
      <div className="absolute top-[5%] w-full">
        <div className="text-[35px] font-extrabold flex justify-center items-center flex-col">
          <h2 className="pb-4 text-[#0f1921]">{heading}</h2>
          <span className="text-[18px]">
            <HomeButton
              link="https://entomo.co/request-demo/"
              bg="#fcdb03"
              minwidth="16rem"
              height="35px"
              color="black"
              text="let’s get started"
              font="bold"
              padding="3px 0px"
            />
          </span>
        </div>
      </div>
      <div className="flex w-full lg:top-[40%] absolute">
        <div className="w-1/2 text-center">
          <span className="text-white font-medium w-1/2 text-[24px] inline-block ">{lefttext}</span>
        </div>
        <div className="w-1/2 text-center">
          <span className="text-white font-medium w-1/2 text-[24px] inline-block ">{righttext}</span>
        </div>
      </div>
      <div className="absolute w-full lg:top-[85%]">
        <div className="text-center w-full">
          <p className="w-1/2 text-white font-medium text-[24px] inline-block mb-[20px]">{downtext}</p>
        </div>
      </div>
    </div>
  )
}

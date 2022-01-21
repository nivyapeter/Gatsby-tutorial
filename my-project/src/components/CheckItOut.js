import React from 'react'

export default function CheckItOut({bgImg,heading,description}) {
    return (
        <div className="bg-[#0064bf] relative block">
            <img className="w-full" src={bgImg} />
            <div className="absolute top-[27%] left-[9%] w-[30%] md:w-[40%] md:top-[10%]">
              <div className="text-[35px] font-extrabold leading-[1.2] text-[#ffffff] mb-[20px] xl:text-[48px] md:text-[25px]">{heading}</div>
              <div className="text-[18px] leading-[1.4] text-[#ffffff] xl:text-[25px] md:text-[14px]">{description}</div>
            </div>
        </div>
    )
}

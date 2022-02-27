import React from "react"

export default function BadgeSection({firstText,secondText,thirdText,bgImg}) {
  return (
    <div>
      <div className="m-auto max-w-[86%] lg:h-[46vh] flex flex-col-reverse	grid-cols-2 ">
        <div className="lg:py-[20px] lg:text-[30px] text-[#0d1319] mb-[40px] lg:py-[68px] text-[30px]">
          <b>{firstText}</b>
          <br />
          <div className="mt-[20px] text-[#0064bf]">
            <h2>{secondText}</h2>
          </div>
        </div>
        <div className="lg:ml-[33%]">
          <img src={bgImg} />
        </div>
      </div>
      <div className="m-auto max-w-[86%] text-left text-[#0f192180] text-[20px] opacity-100">
       <h1 className="mb-[20px]">{thirdText}</h1>
      </div>
    </div>
  )
}

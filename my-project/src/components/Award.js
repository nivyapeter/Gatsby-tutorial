import React from "react"

export default function Award({
  bgImg,
  mobImg,
  firsttext,
  secondtext,
  thirdtext,
  width,
  height,
  
}) {
  return (
    <div className="relative md:py-20 bg-[#fff4d9]" >
      <img className="relative sm:block  hidden w-full" src={bgImg} />
      <img className="relative w-full h-screen sm:hidden block" style={{width:width,height:height}} src={mobImg} />
      <div> 
      <div className="absolute top-[25rem] pb-12 text-[28px] md:pt-8 md:text-[21px]leading-tight mx-3.5 md:w-[46vw] md:top-[-14rem] xl:py-0 xl:top-[0rem] md:mt-[8rem] xl:w-[68%] xl:px-[15rem]">
       <div>
        <h2 className="xl:pb-8">{firsttext}</h2>
        {/* <br /> */}
        <h3 className="text-[#0064bf] xl:pb-8">{secondtext}</h3>
        {/* <br /> */}
        </div>
        <p className="text-[18px] mb-[1.5rem] lowercase font-[Avnier Next] xl:pb-8">
          {thirdtext}
        </p>
      </div>
      </div>
    </div>
  )
}

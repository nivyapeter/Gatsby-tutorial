import { Link } from "gatsby"
import React from "react"

export default function Banner({bgImg,mobImg,title,text,subtitle,perfomanceLink,performimg,}) {
  return (
    <div className="w-full">
      <div className="relative">
        <img className="relative sm:block  hidden w-full" src={bgImg} />
        <img className="relative w-full sm:hidden block" src={mobImg} />
      </div>
      <div className="absolute left-[2%] top-[20%] w-4/6 px-[15px]">
        <div className="w-full m-[auto] block">
          <div className="flex flex-col pb-[2%] text-[40px] ">
            <div className="mb-[4px] text-[49px]">
              <h1 className="text-[#0f1921] leading-1.25 text-[5.6rem]">
              <p className="mb-[0px] sm:text-[56px] text-[30px] font-medium">{title}</p>
              </h1>
            </div>
            <div className="sm:text-[3.2rem] text-[1.3rem] leading-1.4 pb-[20px] font-medium sm:leading-2 text-[#4b4219] mb-[4px]">
                <p>{subtitle}</p>
            </div>
            
          </div>
        </div>
        <div className="mt-[13rem] flex jusitify-between w-10/12 hidden sm:block">
          <Link className="text-[#0064bf] extrabold mb-[1.5rem]" to={perfomanceLink}>
            <div className="flex flex-row justify-between items-center">
              <img className="pr-3 mr-[1.5rem]" src={performimg} />
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
    </div>
  )
}

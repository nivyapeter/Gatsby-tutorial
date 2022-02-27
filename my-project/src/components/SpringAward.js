import React from "react"

export default function SpringAward({
  heading,
  textone,
  texttwo,
  textthree,
  textfour,
  textfive,
  aspireImg,
  highperfomerImg,
  leaderImg,
  leadspringImg,
  usersImg,
}) {
  return (
    <div>
      <div>
        <h2 className="text-center text-white text-[36px]">{heading}</h2>
      </div>
      <div className="flex flex-col justify-center mt-20 ">
        <div className="lg:w-1/6  lg:px-[15px] pb-12">
          <img src={aspireImg} />
          <div className="hidden sm:text-center sm:text-white sm:text-[20px] lg:pt-[10px] opacity-100">
            {textone}
          </div>
        </div>
        <div className="lg:w-1/6 lg:pt-24 lg:pb-[20px] lg:px-[15px] pb-12">
          <img src={highperfomerImg} />
          <div className="hidden sm:text-center sm:text-white sm:text-[20px] lg:pt-[10px] opacity-100">
            {texttwo}
          </div>
        </div>
        <div className="lg:w-1/4 lg:pt-24 lg:pb-[20px] lg:px-[15px] pb-12">
          <img src={leaderImg} />
          <div className="hidden sm:text-center sm:text-white sm:text-[20px] lg:pt-[10px] opacity-100">
            {textthree}
          </div>
        </div>
        <div className="lg:w-1/6 lg:pt-32 lg:pb-[20px] lg:px-[15px] pb-12">
          <img src={leadspringImg} />
          <div className="hidden sm:text-center sm:text-white sm:text-[20px] lg:pt-[10px] opacity-100">
            {textfour}
          </div>
        </div>
        <div className="lg:w-1/6 lg:pb-[20px] lg:px-[15px] pb-12 ">
          <img src={usersImg} />
          <div className="hidden sm:text-center sm:text-white sm:text-[20px] lg:pt-[10px] opacity-100">
            {textfive}
          </div>
        </div>
      </div>
    </div>
  )
}

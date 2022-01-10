import React from "react"

export default function TotalEcnomic({heading,text}) {
  return (
    <div className="bg-[#fcdb03] lg:py-20 ">
      <div className="lg:px-[5%] float-left">
        <div className="m-auto">
          <div className="text-left text-[32px] text-black lg:p-12 w-1/2">
            <strong>{heading}</strong>
            <p>{text}</p>
          </div>


        </div>
      </div>
    </div>
  )
}

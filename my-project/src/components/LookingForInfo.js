import React from 'react'

export default function LookingForInfo({bgImg,heading,sidetext,sidetexttwo}) {
    return (
        <div className="bg-[#0064bf] pt-[4%]">
            <div className="text-center text-[35px] mb-[25px] text-white">
                <h2>{heading}</h2>
            </div>
            <div class="mt-[5%] mx-[auto] flex items-center text-center">
               <div className="w-1/3 text-[19px] mb-[0] leading-[1.6] font-normal text-[#ffffff] ">
                <p className="mb-[0] pb-[20px]">{sidetext}</p>
                
                
               </div>
               <div className="w-1/3 text-[19px] mb-[0] leading-[1.6] sm:hidden font-normal text-[#ffffff]">
                <p className="mb-[0] pb-[20px]">{sidetext}</p>
                
               </div>
                
               <div className="w-1/3 text-[19px] ">
               <img src={bgImg} />
                </div>
                <div className="w-1/3 text-[19px] mb-[0] leading-[1.6] font-normal text-[#ffffff]">
                <p className="mb-[0] pb-[20px]">{sidetexttwo}</p>
                
               </div>
            </div>
        </div>
    )
}

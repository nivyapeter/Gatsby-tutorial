import React, { useState } from "react"
import videoimg from "../images/video.svg"
import modalimg from "../images/modal.jpg"
import Purposeimg from "../images/Union 7.svg"
import insightimg from "../images/Union 8.svg"
import growthimg from "../images/Union 6.svg"
import { GROWTH, INSIGHTS, PURPOSE } from "../constants"
import HomeButton from "./HomeButton"
import Modal from "./Modal"


export default function EnterpiseBlueBlk() {
  const [openModal,setOpenModal] = useState(false);
  const showModal = () => {
    setOpenModal(true);
    document.getElementsByTagName("body")[0].style.overflow="hidden";
  }
 
  return (
    // <div className="">
    <div className="md:grid md:grid-cols-2">
      <div className="flex items-center pt-[7rem] px-[3rem] xl:pl-32 md:pb-16 lg:pt-24 md:pt-0 xl:pt-[4rem] xl:items-unset">
        <div className="relative openModalBtn" onClick={showModal}>
          <div>
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            src={videoimg}
          />
          <img className="rounded-[10px]" src={modalimg} />
          </div>
          
        </div>
        <div >
          {openModal && <Modal closeModal={setOpenModal} />}
          </div>
       
      </div>
      <div>
        <div className=" text-white py-[2rem] px-[3rem] lg:pt-16 xl:pl-32 items-center xl:pt-[4rem]">
          <div className="flex">
            <div className="flex text-[25px] items-center min-w-[41%] justify-between">
              <div>
                <img
                  className="pt-[1rem] pr-[3rem] pb-[2rem] xl:pl-[2rem] xl:p-0"
                  src={Purposeimg}
                />
                <div className="min-h-[36px] md:min-h-0 xl:min-h-0 mt-[8px] mr-[8px] text-[18px] xl:m-0 ">
                  <p className="mt-[16px] mb-[20px]  ">{PURPOSE}</p>
                </div>
              </div>
              <div>
                <img
                  className="pt-[1rem] pr-[3rem] pb-[2rem] xl:pl-[2rem] xl:p-0"
                  src={insightimg}
                />
                <div className="min-h-[36px] md:min-h-0 xl:min-h-0  mt-[8px] mr-[8px] text-[18px]">
                  <p className="mt-[16px] mb-[20px]">{INSIGHTS}</p>
                </div>
              </div>
              <div>
                <img
                  className="pt-[1rem] pr-[3rem] pb-[2rem] xl:pl-[2rem] xl:p-0"
                  src={growthimg}
                />
                <div className="min-h-[36px] md:min-h-0 xl:min-h-0 mt-[8px] mr-[8px] text-[18px]">
                  <p className="mt-[16px] mb-[20px]">{GROWTH}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-[1.5rem] mb-[20px]">
            <p>
              unravel the <br />
              enterprise of tomorrow{" "}
            </p>
          </div>
          <div>
            <HomeButton
              text="watch now"
              bg="#fcdb03"
              color="black"
              font="bold"
              width="46%"
              margintop="unset"
            

            />
          </div>
        </div>
      </div>
    </div>

    // </div>
  )
}

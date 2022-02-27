import React from "react"

export default function Modal({ closeModal }) {
  const closeModalButton = () => {
    closeModal(false)
    document.getElementsByTagName("body")[0].style.overflow = "scroll"
  }
  return (
    <div className="fixed duration-1000  lg:z-[1] inset-0 flex items-center justify-center bg-gray-700 bg-opacity-70 h-screen w-[100%]">
      <div className="p-6 bg-[transparent]">
        <div className="xl:p-[15px] flex items-end justify-end text-white-600 bg-white">
          <button onClick={closeModalButton}>x</button>
        </div>
        <iframe
          className="xl:w-[1024px] xl:h-[470px] w-[324px] h-[468px]"
          src="https://www.youtube.com/embed/Ot_C794fZ3A"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  )
}

import React from 'react'

export default function HomeBanner({bgImg,title,subtitle,mobImg}) {
    return (
        <div className="relative">
          <img className="relative sm:block  hidden" src={bgImg}/>
          <img className="relative w-full sm:hidden block" src={mobImg} />
        <div className="text-black-600 font-bold absolute inset-9 m-auto sm:p-28 pr-16 pt-15">
          <h1 className="text-5xl ">{title}</h1>
          <p className="text-xl pt-5 font-normal">{subtitle}</p>
         
        </div> 
      </div>
    )
}

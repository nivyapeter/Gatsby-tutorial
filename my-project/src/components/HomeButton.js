import React from 'react'

export default function HomeButton({link,text,bg,color,font,width,margintop,minwidth,height,padding}) {
    return (
        <div>
            <a class="hover:cursor-pointer"href={link}>
            <button className="text-white bg-blue-600 rounded-full p-2 md:mt-0 mt-7 xl:w-2/12 hover:cursor-pointer md:w-3/12 w-1/2" style={{backgroundColor:bg, color:color,fontWeight:font,width:width,marginTop:margintop,minWidth:minwidth,height:height,padding:padding}}>{text}</button>
            </a>
       </div>
    )
}

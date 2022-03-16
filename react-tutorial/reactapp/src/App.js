// import { cleanup } from "@testing-library/react";
// import { cleanup } from "@testing-library/react";
import React, { useState } from "react";
import "../src/styles/appStyle.css";
import News from "./components/News";
import Press from "./components/Press";

const App = () => {
  const [showText, setShowText] = useState(false)
  const [showTextTwo, setShowTextTwo] = useState(false)
  const [currentWindow,setCurrentWindow] = useState ("News");
  const [style,setStyle] = useState("btnOne");
  
  const [style2,setStyle2] = useState(false);
   const changeStyle =()=> {
     setStyle("btnTwo");
   }
   const hadleClick =(e) => {
    setCurrentWindow ( e.target.value)
   }


  return (
    <div>
      {showText ? <News /> : null}
      {showTextTwo ? <Press /> : null}
      <div className="btn_section" >
        <button className="btn" onClick={() => setShowText(!showText)}>News</button>
        <button className="btn" onClick={() => setShowTextTwo(!showTextTwo)} >Press</button>
      </div>

      {/* ############################################################################################## */}

      <div className="btn_section">
        <style>
          {`.style2 {
            background-color: blue;
            padding: 2rem 4rem;
            font-size: 2rem;
            border: 2px solid black;
            border-radius: 8px;
            }`}
        </style>
          <button className={style2?"style2" : "btnOne"} value="News" onClick={()=>setStyle2(!style2)}>News</button>
           <button className={style} value="press"onClick={changeStyle}>Press</button>
      </div>
          
    </div>
          
  );
};



// const App = () => {
  
//   const [currentWindow,setCurrentWindow] = useState (News);
//   return (

//     <div>
//       <button className="btn" onClick={() => {setCurrentWindow(News)}}>News</button>
//       <button className="btn" onClick={() => {setCurrentWindow(Press)}}>Press</button>
//     </div>
//   );
// };

export default App;

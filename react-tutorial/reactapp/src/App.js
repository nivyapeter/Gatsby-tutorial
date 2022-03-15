// import { cleanup } from "@testing-library/react";
// import { cleanup } from "@testing-library/react";
import React, { useState } from "react";
import "../src/styles/appStyle.css";
import News from "./components/News";
import Press from "./components/Press";

const App = () => {
  const [showText, setShowText] = useState(false)
  const [showTextTwo, setShowTextTwo] = useState(false)
  const [currentWindow,setCurrentWindow] = useState ();
  const [style,setStyle] = useState("btnOne");
   const changeStyle =()=> {
     setStyle("btnTwo");
   }
   const hadleClick =(e) => {
    setCurrentWindow (<News />)
   }

  return (
    <div>
      {showText ? <News /> : null}
      {showTextTwo ? <Press /> : null}
      <div className="btn_section" >
        <button className="btn" onClick={() => setShowText(!showText)}>News</button>
        <button className="btn" onClick={() => setShowTextTwo(!showTextTwo)} >Press</button>
      </div>
      <div className="btn_section">
          <button className={style} onClick={changeStyle} {...hadleClick}>News</button>
          <button className={style} onClick={changeStyle}>Press</button>
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

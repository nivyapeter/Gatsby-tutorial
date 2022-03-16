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
  // const [style2,setStyle2] = useState("btnOne");
   const changeStyle =()=> {
     setStyle("btnTwo");
   }
  //  const changeStyleNext =()=> {
  //   setStyle2("btnThree");
  // }
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
      <div className="btn_section">
          <button className="btnOne" value="News" onClick={hadleClick}>News</button>
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

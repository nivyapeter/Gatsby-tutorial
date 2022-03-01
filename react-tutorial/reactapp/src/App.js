// import { cleanup } from "@testing-library/react";
// import { cleanup } from "@testing-library/react";
import React, { useState } from "react";
import appStyle from "../src/styles/appStyle.css";
import News from "./components/News";
import Press from "./components/Press";

const App = () => {
  const [showText, setShowText] = useState(false)
  const [showTextTwo, setShowTextTwo] = useState(false)
  return (
    <div>
      {showText ? <News /> : null}
      {showTextTwo ? <Press /> : null}
      <div className="btn_section" >
        <button className="btn" onClick={() => setShowText(!showText)}>News</button>
        <button className="btn" onClick={() => setShowTextTwo(!showTextTwo)} >Press</button>
      </div>
    </div>
  );
};

export default App;

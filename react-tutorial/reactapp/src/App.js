// import { cleanup } from "@testing-library/react";
// import { cleanup } from "@testing-library/react";
import React, { useState } from "react";
import "../src/styles/appStyle.css";
import News from "./components/News";
import Press from "./components/Press";
// import { Items } from "../src/Constants/Items";

const Items = {
  popular:[{"title":"hai"},{"text1":"hoii"},{"text2":"koii"}],
  
  customer:[{"title":"hai"},{"text1":"hoii"},{"text2":"koii"}],
  
  }


const App = () => {
  const [showText, setShowText] = useState(false);
  const [showTextTwo, setShowTextTwo] = useState(false);
  const [value, setValue] = useState([Items]);
  const [style, setStyle] = useState("btnOne");

  const [style2, setStyle2] = useState(false);
  const changeStyle = () => {
    setStyle("btnTwo");
  };
  const hadleClick = () => {
    setValue(value);
  };


  const [books, updateBooks] = React.useState([]);
   
   const handleClick = () => {
       // update the books state property by adding a new book
       updateBooks([...books, { name: 'A new Book', id: '...'}]);
   }

  return (
    <div>
      {showText ? <News /> : null}
      {showTextTwo ? <Press /> : null}
      <div className="btn_section">
        <button className="btn" onClick={() => setShowText(!showText)}>
          News
        </button>
        <button className="btn" onClick={() => setShowTextTwo(!showTextTwo)}>
          Press
        </button>
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
        <button
          className={style2 ? "style2" : "btnOne"}
          value="News"
          onClick={() => setStyle2(!style2)}
        >
          News
        </button>
        <button className={style} value="press" onClick={changeStyle}>
          Press
        </button>
      </div>
      {/* ############################################################ */}
      <div>
        <buttun className="btnOne" value="News" onClick={hadleClick}>News</buttun>
        <div className="card">
          {Items.map(Item => {
            return (
              <div key={Item.id} className="card">
                <h1>{Item.title}</h1>
                <p>{Item.text1}</p>
                <p>{Item.text2}</p>
              </div>
            );
          })}
        </div>
      </div>
      {/* #################3333333333 */}
    
   <ul>
      { books.map(book => {       
        return(
        <li key={book.id}>{book.name}</li>  
        );
      })}
   </ul>
    </div>
  );
};

export default App;

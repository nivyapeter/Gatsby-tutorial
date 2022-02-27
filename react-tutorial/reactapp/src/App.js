import React,{ useState } from 'react';

const App = () => {

const [value,setValue] = useState(0);


// const [name,setName] = useState("Debug media")
// const [age,setAge] = useState("24")
// const resetName = () => {
//   setName(" ")
// }

// const myFunction = () => {
//   alert("hai all welcome")
// }


  return (
    <div>
      {/* <h2>Welcome{name}{age}</h2>
      <div>
      <button onClick={() => setAge("")}>Reset</button>
        <button onClick={resetName}>Reset</button>
        
      </div> */}

      <div>
        <p>{value}</p>
        <button onClick={() => setValue((value + 1 ))}>Increment Value</button>
        <button onClick={() => setValue((value - 1 ))}>Decrement Value</button>
      </div>


    </div>
  );
}

export default App;

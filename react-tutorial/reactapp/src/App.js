import React,{ useState } from 'react';

const App = () => {
// const [name,setName] = useState("Debug media")
// const [age,setAge] = useState("24")
// const resetName = () => {
//   setName(" ")
// }

const myFunction = () => {
  alert("hai all welcome")
}


  return (
    <div>
      {/* <h2>Welcome{name}{age}</h2>
      <div>
      <button onClick={() => setAge("")}>Reset</button>
        <button onClick={resetName}>Reset</button>
        
      </div> */}

      <div>
        <button onClick={myFunction}>Welcome</button>
        <button onClick={myFunction}>Thank you</button>
      </div>


    </div>
  );
}

export default App;

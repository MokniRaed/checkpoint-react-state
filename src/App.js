import logo from "./logo.svg";
import "./App.css";
import Person from "./Person/Person";
import { useState } from "react";

function App() {
  
  const [shows,setShows ] = useState(false)
  return (
    <div className="App">
      <button onClick={()=> setShows(!shows)}>Toggle shows</button>
       {shows && 
       <Person
        fullName={"Ahmed"}
        bio={"Student Full stack js"}
        profession={"It student"}
        imgSrc={
          "https://menshaircuts.com/wp-content/uploads/2023/01/tp-simple-hair-style-men.jpg"
        }
      /> } 
      
      <h1>We are plying ith react state</h1>
    </div>
  );
}

export default App;

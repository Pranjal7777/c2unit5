import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";



function App() {

  const [house, setHouse] = useState([])

  var x = []

  // const getHouse = (e) => {

  //   e = x
  console.log("x", x)



  return (
    <div className="App">
      <button className="toggleForm">
        Add Houses
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {/* Show component based on state */}
      <AddHouse x={x} />

      <br />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Auth from "./components/Auth/Auth";
import Pies from "./components/Pies/Pie";

function App() {
  const [sessionToken, setSessionToken] = useState(undefined);
  let string = "this is a string";
  let number = 4;
  let obj = {
    test: "test",
  };

  const viewConductor = () => {
    return sessionToken !== undefined ? <Pies /> : <Auth />;
  };

  return (
    <div className="App">
      <Navbar token={sessionToken} string={string} num={number} object={obj} />
      {viewConductor()}
    </div>
  );
}

export default App;

// Array Destructuring

// destructuring in javascript is a simplifed method of extracting multiple properties from an array by taking the structure of the array, and the deconstrsing it down into individual parts by assigning them.

// let [first, second, third] = [
//   "Fellowship of the ring",
//   "Two towers",
//   "return of the king",
// ];

// console.log(first, second, third);

// let [a, b, c] = ["mercury", "venus", "mars"];
// console.log(a);
// console.log(c);

// let planets = [
//   "Mercury",
//   "Venus",
//   "Earth",
//   "Mars",
//   "Jupiter",
//   "saturn",
//   "Uranus",
//   "Neptune",
//   "Pluto",
// ];
// let [first, , third, ...other] = planets;
// //... = spread opertor.
// console.log(first);
// console.log(third);
// console.log(other);

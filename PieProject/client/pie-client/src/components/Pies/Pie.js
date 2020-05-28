import React, { useState, useEffect } from "react";
import "./Pie.css";
import DisplayPie from "./DisplayPie/DisplayPie";

const testDataPies = [
  {
    nameOfPie: "Pumpkin",
    baseOfPie: "Pumpkin Puree",
    crust: "pastry",
    timeToBake: 50,
    servings: 8,
    rating: 4.0,
  },
  {
    nameOfPie: "Apple",
    baseOfPie: "Apple Jam",
    crust: "Graham",
    timeToBake: 30,
    servings: 8,
    rating: 10,
  },
  {
    nameOfPie: "Pecan",
    baseOfPie: "Pecon Puree",
    crust: "pastry",
    timeToBake: 50,
    servings: 8,
    rating: 8.0,
  },
];

const Pies = (props) => {
  const [pies, setPies] = useState([]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name of Pie</th>
          <th>Base of Pie</th>
          <th>Crust</th>
          <th>Bake Time</th>
          <th>Servings</th>
          <th>Rating</th>
        </tr>
      </thead>
      <tbody>
        <DisplayPie testData={testDataPies} />
      </tbody>
    </table>
  );
};

export default Pies;

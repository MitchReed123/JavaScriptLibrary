import React from "react";
import "./DisplayPie.css";

const DisplayPie = (props) => {
  console.log(props);
  return (
    <>
      {props.testData.map((pie) => {
        return (
          <tr>
            <td>{pie.nameOfPie}</td>
            <td>{pie.baseOfPie}</td>
            <td>{pie.crust}</td>
            <td>{pie.timeToBake}</td>
            <td>{pie.servings}</td>
            <td>{pie.rating}</td>
          </tr>
        );
      })}
    </>
  );
};

export default DisplayPie;

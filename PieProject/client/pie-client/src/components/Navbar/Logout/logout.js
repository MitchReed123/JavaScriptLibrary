import React from "react";
import "./logout.css";
import pwr from "../../../assets/pwrbutton.png";

const Logout = (props) => {
  return (
    <div>
      <img id="logout" className="logout" src={pwr} alt="power button" />
    </div>
  );
};

export default Logout;

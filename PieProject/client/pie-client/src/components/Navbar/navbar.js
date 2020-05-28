import React from "react";
import "./navbar.css";
import piePic from "../../assets/pie.jpg";
import Logout from "./Logout/logout";
const Navbar = (props) => {
  return (
    <div>
      <nav>
        <img id="piePic" src={piePic} alt="pie" />
        <Logout />
      </nav>
    </div>
  );
};
export default Navbar;

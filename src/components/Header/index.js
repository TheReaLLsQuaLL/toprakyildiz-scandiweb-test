import React from "react";
import "./styles.scss";
import Directory from "../Directory";
import logo from "./../../assets/a-logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <Directory />
      <div className="wrap">
        <div className="wrap-logo">
          <img src={logo} alt="website logo"></img>
        </div>
      </div>
    </header>
  );
};

export default Header;

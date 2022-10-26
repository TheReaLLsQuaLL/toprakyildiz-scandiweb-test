import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import Directory from "../Directory";
import logo from "./../../assets/a-logo.svg";

const Header = (props) => {
  return (
    <header className="header">
      <Directory />
      <div className="wrap">
        <div className="wrap-logo">
          <Link to="/">
            <img src={logo} alt="website logo"></img>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

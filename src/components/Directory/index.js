import React from "react";
import "./styles.scss";

const Directory = (props) => {
  return (
    <div className="directory">
      <button className="directory-button-women">
        <a href="/">women</a>
      </button>
      <button className="directory-button-other">
        <a href="/">men</a>
      </button>
      <button className="directory-button-other">
        <a href="/">kids</a>
      </button>
    </div>
  );
};

export default Directory;

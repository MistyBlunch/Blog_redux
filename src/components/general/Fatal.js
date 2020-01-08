import React from "react";
import "../../css/fatal.css";

import errorImage from "../../images/error_img.png";

const Fatal = props => (
  <div className="center error_page">
    <img className="" src={errorImage} alt="Error" />
    <h1>{props.error}</h1>
  </div>
);

export default Fatal;

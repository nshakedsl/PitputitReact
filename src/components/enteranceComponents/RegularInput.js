import React from "react";

import "bootstrap/dist/css/bootstrap.css";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


function RegularInput({ placeholder, value, setValue }) {

  const renderTooltip = props => (
    <Tooltip className="my-tooltip" {...props}> This is mandatory field. Must contain 2-32 charcters.</Tooltip>
  );


  return (
    <div className="App">
      <OverlayTrigger placement="left" overlay={renderTooltip}>
      {setValue && (<input 
        data-bs-trigger="click"  className="input regular" type="text" name="user" placeholder={placeholder} value={value} autocomplete="off"
        onChange={(e) => setValue(e.target.value)} />)}
      </OverlayTrigger>
    </div>
  );
}

export default RegularInput;


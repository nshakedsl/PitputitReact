
// import { useState } from 'react';
// import Button from "react-bootstrap/Button";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";

// function PasswordInput({ placeholder, value, setValue }) {
//   const [showPassword, setShowPassword] = useState(false);

//   const handleTogglePassword = () => {
//     setShowPassword(!showPassword);
//   };


//   const renderTooltip = props => (
//     props && <Tooltip className="my-tooltip" {...props}> This is mandatory field. Must contain 8-32 charcters. Must contain a combination of uppercase and lowercase letters and numbers. Can use . _ - : ? ! signs</Tooltip>
//   );

//   const renderTooltipEye = props => (
//     props && <Tooltip className="my-tooltip" {...props}>{showPassword ? "Put my glasses on to hide my password🕶️ " : "Take off my glasses to see my password👁️ "} </Tooltip>
//   );

//   return (
//     <div className="containLoginInput">
//       <OverlayTrigger placement="left" overlay={renderTooltip}>
//         {setValue && (
//           <input
//             className="input regular"
//             type={showPassword ? 'text' : 'password'}
//             name="user"
//             placeholder={placeholder}
//             value={value}
//             onChange={(e) => setValue(e.target.value)}
//           />
//         )}
//       </OverlayTrigger>

//       <OverlayTrigger placement="top" overlay={renderTooltipEye}>
//         <img
//           className="eye"
//           src={showPassword ? "images/Picture6.png" : "images/Picture13.png"}
//           alt="eye"
//           onClick={handleTogglePassword} />

//       </OverlayTrigger>
//     </div>
//   );
// }

// export default PasswordInput;

import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function PasswordInput({ placeholder, value, setValue }) {
  const [showPassword, setShowPassword] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const renderTooltip = (props) => props && <Tooltip className="my-tooltip" {...props}>This is a mandatory field. Must contain 8-32 characters. Must contain a combination of uppercase and lowercase letters and numbers. Can use . _ - : ? ! signs</Tooltip>;

  const renderTooltipEye = props => (
       props && <Tooltip className="my-tooltip" {...props}>{showPassword ? "Put my glasses on to hide my password🕶️ " : "Take off my glasses to see my password👁️ "} </Tooltip>
     );

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    //setIsValid(inputValue.length >= 8 && inputValue.length <= 32 && /^[a-zA-Z0-9\._:\-\?!]+$/.test(inputValue) && (!/[0-9]/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)));
    setIsValid(
      inputValue.length >= 8 &&
      inputValue.length <= 32 &&
      /^[a-zA-Z0-9\._:\-\?!]+$/.test(inputValue) &&
      /[0-9]/.test(inputValue) &&
      /[a-z]/.test(inputValue) &&
      /[A-Z]/.test(inputValue)
    );
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`containLoginInput ${isValid ? '' : 'divBig'}`}>
      <OverlayTrigger placement="left" overlay={renderTooltip}>
        <input
          className={`input regular ${isValid ? '' : 'error'}`}
          type={showPassword ? 'text' : 'password'}
          name="user"
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </OverlayTrigger>
      <div>
        <OverlayTrigger placement="top" overlay={renderTooltipEye}>
        <img
          className="eye"
          src={showPassword ? "images/Picture6.png" : "images/Picture13.png"}
          alt="eye"
          onClick={handleTogglePassword}
        />
      </OverlayTrigger>
      </div>
      
    </div>
  );
}

export default PasswordInput;

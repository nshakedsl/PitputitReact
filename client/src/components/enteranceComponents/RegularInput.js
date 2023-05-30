import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function RegularInput({ placeholder, value, setValue, setError, isRegistration }) {
  const [isValid, setIsValid] = useState(true);

  const renderTooltip = (props) => props && <Tooltip className="my-tooltip" {...props}>This is a mandatory field. Must contain 2-32 characters. Use lowercase, uppercase letters, numbers, and . _ - : ? ! signs</Tooltip>;

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    if (isRegistration==1) {
    setIsValid(inputValue.length >= 2 && inputValue.length <= 32 && /^[a-zA-Z0-9\._:\-\?!]+$/.test(inputValue));
    //setError(isValid ? '' : 'Invalid input');
    setError('');
    }
  };



  return (
    <div className={`containLoginInput1 ${isValid ? '' : 'containLoginInput2'}`}>
      <OverlayTrigger placement="left" overlay={renderTooltip}>
        <input
          data-bs-trigger="click"
          //className={`input regular ${isValid ? '' : 'error'}`}
          className="input regular"
          type="text"
          name="user"
          placeholder={placeholder}
          value={value}
          autoComplete="off"
          onChange={handleChange}
        />
      </OverlayTrigger>
    </div>
  );
}

export default RegularInput;


// RegularInput.js


// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Button from "react-bootstrap/Button";
// import OverlayTrigger from "react-bootstrap/OverlayTrigger";
// import Tooltip from "react-bootstrap/Tooltip";

// function RegularInput({ placeholder, value, setValue, setError, isRegistration }) {
//   const [isValid, setIsValid] = useState(true);

//   const renderTooltip = (props) =>
//     props && (
//       <Tooltip className="my-tooltip" {...props}>
//         This is a mandatory field. Must contain 2-32 characters. Use lowercase, uppercase letters, numbers, and . _ - : ? ! signs
//       </Tooltip>
//     );

//   const handleChange = (e) => {
//     const inputValue = e.target.value;
//     setValue(inputValue);

//     if (isRegistration) {
//       setIsValid(inputValue.length >= 2 && inputValue.length <= 32 && /^[a-zA-Z0-9\._:\-\?!]+$/.test(inputValue));
//       setError(isValid ? "" : "Invalid input");
//     }
//   };

//   return (
//     <div className={`containLoginInput1 ${isValid ? "" : "containLoginInput2"}`}>
//       <OverlayTrigger placement="left" overlay={renderTooltip}>
//         <input
//           data-bs-trigger="click"
//           className={`input regular ${isValid ? "" : "error"}`}
//           type="text"
//           name="user"
//           placeholder={placeholder}
//           value={value}
//           autoComplete="off"
//           onChange={handleChange}
//         />
//       </OverlayTrigger>
//     </div>
//   );
// }

// export default RegularInput;


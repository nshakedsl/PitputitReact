
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

function PasswordInput({ placeholder, value, setValue }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const renderTooltip = props => (
    props && <Tooltip className="my-tooltip" {...props}> This is mandatory field. Must contain 8-32 charcters. Must contain a combination of uppercase and lowercase letters and numbers.</Tooltip>
  );

  const renderTooltipEye = props => (
    props && <Tooltip className="my-tooltip" {...props}>{showPassword ? "Put my glasses on to hide my password🕶️ " : "Take off my glasses to see my password👁️ "} </Tooltip>
  );

  return (
    <div className="containLoginInput">
      <OverlayTrigger placement="left" overlay={renderTooltip}>
        {setValue && (
          <input
            className="input regular"
            type={showPassword ? 'text' : 'password'}
            name="user"
            placeholder={placeholder}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </OverlayTrigger>

      <OverlayTrigger placement="top" overlay={renderTooltipEye}>
        <img
          className="eye"
          src={showPassword ? "images/Picture6.png" : "images/Picture13.png"}
          alt="eye"
          onClick={handleTogglePassword} />

      </OverlayTrigger>
    </div>
  );
}

export default PasswordInput;

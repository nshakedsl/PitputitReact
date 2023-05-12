
import './../styles/login.css';
import { useState } from 'react';

function PasswordInput({ placeholder, value, setValue }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="containLoginInput">
      {setValue && (
        <input
        data-toggle="tooltip" data-placement="left" data-html="true" title="This is mandatory field. Must contain 8-32 letters and numbers."
          className="input regular"
          type={showPassword ? 'text' : 'password'}
          name="user"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      
      <img
        className="eye"
        src={showPassword ? "images/Picture6.png" : "images/Picture13.png"}
        alt="eye"
        onClick={handleTogglePassword} data-toggle="tooltip" data-placement="top" title="remove my glasses🕶️
        to see my password"
      />
    </div>
  );
}

export default PasswordInput;

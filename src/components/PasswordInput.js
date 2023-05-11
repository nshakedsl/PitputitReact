
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
        src={showPassword ? "images/eye-solid.svg" : "images/eye-slash-solid.svg"}
        alt="eye"
        onClick={handleTogglePassword}
      />
    </div>
  );
}

export default PasswordInput;

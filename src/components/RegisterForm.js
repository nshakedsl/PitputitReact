import './../styles/login.css'
import PasswordInput from './PasswordInput';
import RegularInput from './RegularInput';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function RegisterForm() {

  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');


 const handleRegisterClick = () => {
  if ( username.trim() === '' || nickname.trim() === '' || password.trim() === '' || verifyPassword.trim() === '') {
      setError('All fields are mandatory');
    } else if (password.length < 8) {
      if (password.length < 8) {
      setError('');
      setError('Password should be at least 8 characters long');
    } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      setError('');
      setError('Password should contain a combination of letters and numbers');
    } else if (password !== verifyPassword) {
      setError('');
      setError('Passwords do not match');
    } else {
      setError(''); // Clear the error message
      navigate('/');
    }}
}

const handleHerfClick = () => {
  navigate('/');
};


return (
    <div className="element_width slide-in-right">
      <RegularInput
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <RegularInput
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <PasswordInput
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <PasswordInput
        placeholder="Verify Password"
        value={verifyPassword}
        onChange={(e) => setVerifyPassword(e.target.value)}
      />
      <button type="button" onClick={handleRegisterClick} className="btn btn-info">Register</button>
      {/* {error && <p className="error">{error}</p>} */}
      <text>{error}</text>
      <text>Already registered? <a href="#" onClick={handleHerfClick} >Click here</a> to login</text>
    </div>

  );
 
     };
  
export default RegisterForm;




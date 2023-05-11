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

    console.log(' username.trim(): ', username);
    console.log('nickname.trim(): ', nickname);
    console.log('password.trim(): ', password.trim());
    console.log(' verifyPassword.trim(): ', verifyPassword.trim());
    if (username.trim() === '' || nickname.trim() === '' || password.trim() === '' || verifyPassword.trim() === '') {
      setError('All fields are mandatory');
    } else if (password.length < 8) {
      setError('Password should cintain at least 8 characters');
    } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      setError('Password should contain a combination of letters and numbers');
    } else if (password !== verifyPassword) {
      setError('Passwords do not match');
    } else {
      setError(''); // Clear the error message
      navigate('/');
    }
  }


  const handleHerfClick = () => {
    navigate('/');
  };


  return (

    <div className="element_width slide-in-right">

      <text className="textError">{error}</text>
      <RegularInput
        placeholder="Username"
        value={username}
        setValue={setUsername}

      />
      <RegularInput
        placeholder="Nickname"
        value={nickname}
        setValue={setNickname}
      />

      <PasswordInput
        placeholder="Password"
        value={password}
        setValue={setPassword}
      />

      <PasswordInput

        placeholder="Verify Password"
        value={verifyPassword}
        setValue={setVerifyPassword}
      />



      <button type="button" onClick={handleRegisterClick} className="btn btn-info">Register</button>
      {/* {error && <p className="error">{error}</p>} */}

      <text>Already registered? <a href="#" onClick={handleHerfClick} >Click here</a> to login</text>
    </div>

  );

};

export default RegisterForm;




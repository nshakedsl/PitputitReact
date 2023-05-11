import './../styles/login.css'
import PasswordInput from './PasswordInput';
import RegularInput from './RegularInput';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleHerfClick = () => {
    navigate('/register');
  };

  const handleRegisterClick = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('All fields are mandatory');
    } else if (password.length < 8) {
        setError('uncorrect password');
     } else {
        setError(''); // Clear the error message
        navigate('/chats');
      }

  };

  return (
    <form>
    <div className="element_width slide-in-right">
      <h3 className="title"> Welcome Back👋</h3>
      <text className="textError">{error}</text>
      <RegularInput
       placeholder="Username"
        value={username}
        setValue={setUsername}/>
      <PasswordInput placeholder="Password"
        value={password}
        setValue={setPassword}/>
      <button type="button" onClick={handleRegisterClick} className="btn btn-info">Log in</button><br />
      <text className="text">Not registered? <a href="#" onClick={handleHerfClick} >click here</a> to register </text>
    </div>
  </form>
  );
}

export default LoginForm;
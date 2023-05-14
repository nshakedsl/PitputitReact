import React, { useState, useContext } from 'react';
import PasswordInput from './PasswordInput';
import RegularInput from './RegularInput';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../ctx/userContext"

function LoginForm() {
  const Userctx = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [shakeError, setShakeError] = useState(false);

  const navigate = useNavigate();

  const handleHerfClick = () => {
    navigate('/register');
  };

  const shakeAction = () => {
    setShakeError(true);
    setTimeout(() => { setShakeError(false); }, 500);
  }

  const handleRegisterClick = () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('All fields are mandatory❗');
      shakeAction();

    } else if (password.length < 8) {
      setError('incorrect password❗');
      shakeAction();

    } else {
      {
        console.log('Userctx.userList: ', Userctx.userList);
        Userctx && Userctx.userList && Userctx.userList.forEach(function (element) {
          console.log(element);
          if (element.userName === username && element.pass === password) {
            Userctx.setUserName(element.userName)
            setError(''); // Clear the error message
            setShakeError(false); // Clear the shake animation
            navigate('/chats');
          }
        })
      };
      setError('incorrect password or username❗'); // Clear the error message
      shakeAction();
    }

  };

  return (
    <form>
      <div className="element_width slide-in-right">
        <h3 className="title"> Welcome Back👋</h3>



        <RegularInput
          placeholder="Username"
          value={username}
          setValue={setUsername} 
          setError={setError}/>
        <PasswordInput placeholder="Password"
          value={password}
          setValue={setPassword} />
        <button type="button" onClick={handleRegisterClick} className="btn btn-info">Log in</button>
        <div id="anim" className={shakeError ? 'shake' : ''}>
          <div className="textError">{error}</div>
        </div>
        <div className="text">Not registered? <a href="#" onClick={handleHerfClick} >click here</a> to register </div>
      </div>
    </form>
  );
}

export default LoginForm;
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
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleHerfClick = () => {
    navigate('/register');
  };

  const shakeAction = () => {
    setShakeError(true);
    setTimeout(() => { setShakeError(false); }, 500);
  }


  const login = async (data) => {
    try {
      setLoading(true)
      const res = await fetch('http://localhost:5000/api/Tokens', {
        'method': 'POST',
        'headers': {
          'Content-Type': 'application/json',
        },
        'body': JSON.stringify(data)
      })
      if (res.status === 404) {
        setError('incorrect password or/and username❗'); // Clear the error message
        shakeAction();
        return
      }
      else {
        if (res.status === 200) {
          const responseData = await res.text()
          return responseData
        }
      }

    }
    catch (err) {
      console.log('err: ', err);

    }
  }

  const handleRegisterClick = async () => {
    if (username.trim() === '' || password.trim() === '') {
      setError('All fields are mandatory❗');
      shakeAction();
    } else {
      {
        let user = { username, password }
        let res = await login(user)
        setLoading(false)
        if (res) {
          // Save the token in local storage
          localStorage.setItem("token", res);
          Userctx.setUserName(username)
          setError(''); // Clear the error message
          setShakeError(false); // Clear the shake animation
          navigate('/chats');
        }

      };

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
          setError={setError}
          isRegistration={0} />
        <PasswordInput placeholder="Password"
          value={password}
          setValue={setPassword}
          isRegistration={0} />
        <button type="button" onClick={handleRegisterClick} className="btn btn-info"> {loading ? <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
          : "Log In"}</button>
        <div id="anim" className={shakeError ? 'shake' : ''}>
          <div className="textError">{error}</div>
        </div>
        <div className="text">Not registered? <a href="#" onClick={handleHerfClick} >click here</a> to register </div>
      </div>
    </form>
  );
}

export default LoginForm;
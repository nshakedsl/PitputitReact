import React, { useState, useContext } from 'react';
import PasswordInput from './PasswordInput';
import RegularInput from './RegularInput';
import { useNavigate } from 'react-router-dom';
import { UserContext } from "../../ctx/userContext"
import { BsArrowRepeat } from "react-icons/bs";
function RegisterForm() {
  const Userctx = useContext(UserContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [verifyPassword, setVerifyPassword] = useState('');
  const [error, setError] = useState('');
  const [shakeError, setShakeError] = useState(false);
  const [imageSrc, setImageSrc] = useState('images/user.png');
  const [loading, setLoading] = useState(false);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      setImageSrc(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const shakeAction = () => {
    setShakeError(true);
    setTimeout(() => { setShakeError(false); }, 500);
  }





  const handleRegisterClick = async () => {
    // ...
    if (username.trim() === '' || nickname.trim() === '' || password.trim() === '' || verifyPassword.trim() === '') {
      setError('All fields are mandatory❗');
      shakeAction();

    } else if (imageSrc === 'images/user.png') {
      setError('image is a mandatory field❗');
      shakeAction();

    } else if (username.length < 2 || nickname.length < 2) {
      setError('inputs must contain at least 2 characters❗');
      shakeAction();

    } else if (!/^[a-zA-Z0-9\._:\-\?!]+$/.test(username) ||
      !/^[a-zA-Z0-9\._:\-\?! ]+$/.test(nickname) ||
      !/^[a-zA-Z0-9\._:\-\?!]+$/.test(password)) {
      setError('You choose invalid characters. Use lowercase, uppercase letters, numbers and . _ - : ? ! signs❗');
      shakeAction();

    } else if (password.length < 8) {
      setError('Password must contain at least 8 characters❗');
      shakeAction();

    } else if (!/[0-9]/.test(password) || !/[a-z]/.test(password) || !/[A-Z]/.test(password)) {
      setError('Password must contain a combination of uppercase and lowercase letters and numbers❗');
      shakeAction();

    } else if (password !== verifyPassword) {
      setError('Passwords do not match❗');
      shakeAction();

    } else {
      // //add user here

      setLoading(true); // Start loading

      try {
        let newUser = { username, password, displayName: nickname, profilePic: imageSrc }
        let res = await register(newUser);

        if (res.ok) {
          setError('');
          setShakeError(false); // Clear the shake animation
          navigate('/');
        }
      } catch (err) {
        console.log('err: ', err);
      }

      setLoading(false); // Stop loading


    }
  };

  const register = async (newUser) => {
    setLoading(true)
    try {
      let res = await fetch('http://localhost:5000/api/Users', {
        'method': 'Post',
        'headers': {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
      })
      if (res.status === 409) {
        // Handle the conflict error here
        setError('This user name is already exist❗');
        shakeAction();
      }
      setLoading(false)
      return res;
      //TODO: handle with wrong image format, user register twice
    } catch (err) {
      console.log('err: ', err);

    }
  }
  const handleHerfClick = () => {
    navigate('/login');
  };


  return (
    <>
      <div className="element_width center_content slide-in-left">
        <img src={imageSrc} alt="default_user" className="picture_width" />
        <label htmlFor="file-upload" className="custom-file-upload">
          Choose Photo
          <BsArrowRepeat />

        </label>
        <input
          id="file-upload"
          type="file"
          name="fileUpload"
          className="debug"
          accept="image/png, image/jpeg"
          onChange={handleFileUpload}
        />
      </div>
      <div className="element_width slide-in-right">
        {/* <div id="anim">
      <text className="textError">{error}</text>
    </div> */}

        <RegularInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
          setError={setError}
          isRegistration={1}


        />

        <RegularInput
          placeholder="Nickname"
          value={nickname}
          setValue={setNickname}
          setError={setError}
          isRegistration={1}
        />

        <PasswordInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          setError={setError}
          isRegistration={1}
        />

        <PasswordInput

          placeholder="Verify Password"
          value={verifyPassword}
          setValue={setVerifyPassword}
          setError={setError}
          isRegistration={1}
        />

        <div id="anim" className={shakeError ? 'shake' : ''}>
          <div className="textError">{error}</div>
        </div>

        <button type="button" onClick={handleRegisterClick} className="btn btn-info"
          disabled={loading} // Disable the button when loading is true
        >

          {loading ? <div className="spinner">
            <div className="bounce1"></div>
            <div className="bounce2"></div>
            <div className="bounce3"></div>
          </div>
            : "Register"}

        </button>



        <div>Already registered? <a href="#" onClick={handleHerfClick} >Click here</a> to login</div>
      </div>
    </>
  );

};

export default RegisterForm;



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

  const handleRegisterClick = () => {
    // ...
    if (username.trim() === '' || nickname.trim() === '' || password.trim() === '' || verifyPassword.trim() === '') {
      setError('All fields are mandatory❗');
      shakeAction();

    } else if (username.length < 2 || nickname.length < 2) {
      setError('inputs must contain at least 2 characters❗');
      shakeAction();

    } else if (username.length > 32 || nickname.length > 32 || password.length > 32 || verifyPassword.length > 32) {
      setError('inputs must contain maximun 32 characters❗');
      shakeAction();

    } else if (password.length < 8) {
      setError('Password must contain at least 8 characters❗');
      shakeAction();

    } else if (!/\d/.test(password) || !/[a-zA-Z]/.test(password)) {
      setError('Password must contain a combination of letters and numbers❗');
      shakeAction();

    } else if (password !== verifyPassword) {
      setError('Passwords do not match❗');
      shakeAction();

    } else {
      //add user here
      let newUser = { userName: username, pass: password, nick: nickname, dialogList: [], image: imageSrc }
      Userctx.setUserList(() => {
        let temp = [...Userctx.userList]
        temp.push(newUser)
        return temp
      })
      setError('');
      setShakeError(false); // Clear the shake animation
      navigate('/');
    }
  };


  const handleHerfClick = () => {
    navigate('/');
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

        <div id="anim" className={shakeError ? 'shake' : ''}>
          <div className="textError">{error}</div>
        </div>

        <button type="button" onClick={handleRegisterClick} className="btn btn-info">Register</button>



        <div>Already registered? <a href="#" onClick={handleHerfClick} >Click here</a> to login</div>
      </div>
    </>
  );

};

export default RegisterForm;




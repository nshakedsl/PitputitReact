// import './../../styles/login.css'
import PasswordInput from './PasswordInput';
import RegularInput from './RegularInput';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {

  const navigate = useNavigate();

  const handleHerfClick = () => {
    navigate('/register');
  };

  const handleRegisterClick = () => {
    navigate('/chats');
  };

  return (
    <form>
      <div className="element_width slide-in-right">
        <h3 className="title"> Welcome Back👋</h3>
        <RegularInput placeholder="Username" />
        <PasswordInput placeholder="Password" />
        <button type="button" onClick={handleRegisterClick} className="btn btn-info">Log in</button><br />
        <text className="text">Not registered? <a href="#" onClick={handleHerfClick} >click here</a> to register </text>
      </div>
    </form>
  );
}

// export default withRouter(LoginForm);
export default LoginForm;
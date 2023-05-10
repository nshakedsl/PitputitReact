import './../styles/login.css'
import PasswordInput from './PasswordInput';
import RegularInput from './RegularInput';

function LoginForm() {
  return (
    <form>
    <div className="element_width slide-in-right">
      <h3 className="title"> Welcome Back👋</h3>
      <RegularInput placeholder="Username"/>
      <PasswordInput placeholder="Password"/>
      <button type="button" onClick={() => window.location.href='chats.html'} className="btn btn-info">Log in</button><br />
      <text className="text">Not registered? <a href="signup.html">click here</a> to register </text>
    </div>
  </form>
  );
}

export default LoginForm;
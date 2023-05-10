import './../styles/login.css'
import PasswordInput from './PasswordInput';
import RegularInput from './RegularInput';

function RegisterForm() {
  return (
<div class="element_width slide-in-right">
        <RegularInput placeholder="Username"/>
        <RegularInput placeholder="Nickname"/>
        <PasswordInput placeholder="Password"/>
        <PasswordInput placeholder="Verify Password"/>
        <button type="button" onclick="window.location.href='login.html'" class="btn btn-info">Rgister</button>
        <text>Already registered? <a href="login.html">Click here</a> to login</text>
    </div>
  );
}

export default RegisterForm;
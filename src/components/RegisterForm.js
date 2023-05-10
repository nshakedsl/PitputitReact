import './../styles/login.css'

function RegisterForm() {
  return (
<div class="element_width slide-in-right">
        <input class="input regular" type="text" name="user" placeholder="Username"/>
        <input class="input regular" type="text" name="nick" placeholder="Nickname"/>
        <div class="containLoginInput">
            <input class="input password " type="password" name="pass" placeholder="Password"/>
            <img class="eye" src="images/eye-solid.svg" alt="eye" />
        </div>
        <div class="containLoginInput">
            <input class="input password " type="password_ver" name="pass" placeholder="Verify Password"/>
            <img class="eye" src="images/eye-solid.svg" alt="eye" />
        </div>
        <button type="button" onclick="window.location.href='login.html'" class="btn btn-info">Rgister</button>
        <text>Already registered? <a href="login.html">Click here</a> to login</text>
    </div>
  );
}

export default RegisterForm;
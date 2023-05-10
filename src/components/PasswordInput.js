import './../styles/login.css'

function PasswordInput({placeholder}) {
  return (
    <div className="containLoginInput">
        <input className="input password" type="password" name="pass" placeholder={placeholder} />
        <img className="eye" src="images/eye-solid.svg" alt="eye" />
    </div>
  );
}

export default PasswordInput;
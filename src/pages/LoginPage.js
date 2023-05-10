
import './../styles/login.css'

function LoginPage() {
  return (
        <div className="center_content background">
          <img src="../pictures/background-left.png" alt="background-left" className="background-left" />
          <img src="../pictures/background-right.png" alt="background-right" className="background-right" />
          <div className="element_width slide-in-left">
            <img src="../pictures/logo-color.svg" alt="logo" className="logo" />
          </div>
          <form>
            <div className="element_width slide-in-right">
              <h3 className="title"> Welcome Back👋</h3>
              <input className="input regular" type="text" name="user" placeholder="Username" />
              <div className="containLoginInput">
                <input className="input password" type="password" name="pass" placeholder="Password" />
                <img className="eye" src="../pictures/eye-solid.svg" alt="eye" />
              </div>
    
              <button type="button" onClick={() => window.location.href='chats.html'} className="btn btn-info">Log in</button><br />
              <text className="text">Not registered? <a href="signup.html">click here</a> to register </text>
            </div>
          </form>
        </div>
  );
}

export default LoginPage;

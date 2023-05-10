
import './../styles/login.css'
import Logo from '../components/Logo';
import Background from '../components/Background';

function LoginPage() {
  return (
        <div className="center_content background">
          <Background/>
          <Logo/>
          <form>
            <div className="element_width slide-in-right">
              <h3 className="title"> Welcome Back👋</h3>
              <input className="input regular" type="text" name="user" placeholder="Username" />
              <div className="containLoginInput">
                <input className="input password" type="password" name="pass" placeholder="Password" />
                <img className="eye" src="images/eye-solid.svg" alt="eye" />
              </div>
              <button type="button" onClick={() => window.location.href='chats.html'} className="btn btn-info">Log in</button><br />
              <text className="text">Not registered? <a href="signup.html">click here</a> to register </text>
            </div>
          </form>
        </div>
  );
}

export default LoginPage;

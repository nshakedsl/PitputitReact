
import './../styles/login.css'
import Logo from '../components/Logo';
import Background from '../components/Background';
import LoginForm from '../components/LoginForm';

function LoginPage() {
  return (
        <div className="center_content background">
          <Background/>
          <Logo/>
          <LoginForm/>
        </div>
  );
}

export default LoginPage;

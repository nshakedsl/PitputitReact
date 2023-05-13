
import './../styles/login.css'
import Logo from '../components/enteranceComponents/Logo';
import Background from '../components/enteranceComponents/Background';
import LoginForm from '../components/enteranceComponents/LoginForm';

function LoginPage({users}) {
  return (
    <div className="center_content background_enterance">
      <Background />
      <Logo />
      <LoginForm />
    </div>
  );
}

export default LoginPage;

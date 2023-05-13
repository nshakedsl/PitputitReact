import './../styles/login.css'
import Background from '../components/enteranceComponents/Background';
import ImageUploader from '../components/enteranceComponents/ImageUploader';
import RegisterForm from '../components/enteranceComponents/RegisterForm';

function RegisterPage({users}) {
  return (
    <div className="center_content background_enterance">
      <Background />
      <ImageUploader />
      <RegisterForm users={users}/>
    </div>
  );
}

export default RegisterPage;

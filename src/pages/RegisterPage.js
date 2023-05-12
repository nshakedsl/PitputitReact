import './../styles/login.css'
import Background from '../components/enteranceComponents/Background';
import ImageUploader from '../components/enteranceComponents/ImageUploader';
import RegisterForm from '../components/enteranceComponents/RegisterForm';

function RegisterPage() {
  return (
    <div class="center_content background_enterance">
      <Background />
      <ImageUploader />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;

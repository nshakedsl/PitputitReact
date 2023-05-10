import './../styles/login.css'
import Background from '../components/Background';
import ImageUploader from '../components/ImageUploader';
import RegisterForm from '../components/RegisterForm';

function RegisterPage() {
  return (
    <div class="center_content background">
        <Background/>
        <ImageUploader/>
        <RegisterForm/>
</div>
  );
}

export default RegisterPage;

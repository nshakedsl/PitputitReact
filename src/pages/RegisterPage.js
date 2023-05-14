import './../styles/login.css'
import Background from '../components/enteranceComponents/Background';
import RegisterForm from '../components/enteranceComponents/RegisterForm';
import React, { useState } from 'react';

function RegisterPage() {

  const [imageSrc, setImageSrc] = useState('images/user.png');

  return (
    <div className="center_content background_enterance">
      <Background />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;


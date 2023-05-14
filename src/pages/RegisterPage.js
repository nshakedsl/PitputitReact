import './../styles/login.css'
import Background from '../components/enteranceComponents/Background';
import ImageUploader from '../components/enteranceComponents/ImageUploader';
import RegisterForm from '../components/enteranceComponents/RegisterForm';
import React, { useState } from 'react';

function RegisterPage() {

  const [imageSrc, setImageSrc] = useState('images/user.png');

  return (
    <div className="center_content background_enterance">
      <Background />
      <ImageUploader imageSrc={imageSrc} setImageSrc={setImageSrc} />
      <RegisterForm imageSrc={imageSrc} />
    </div>
  );
}

export default RegisterPage;


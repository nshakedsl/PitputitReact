import React from 'react';
import './../styles/login.css'
import Background from '../components/enteranceComponents/Background';
import RegisterForm from '../components/enteranceComponents/RegisterForm';

function RegisterPage() {


  return (
    <div className="center_content background_enterance">
      <Background />
      <RegisterForm />
    </div>
  );
}

export default RegisterPage;


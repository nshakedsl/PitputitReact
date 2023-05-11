import logo from './logo.svg';
import LoginPage from './pages/LoginPage';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<ChatPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/chats" element={<ChatPage />} />
    </Routes>
  </Router>

  );
}

export default App;

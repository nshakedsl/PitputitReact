import LoginPage from './pages/LoginPage';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
let users = []
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage users ={users}/>} />
        <Route path="/register" element={<RegisterPage users ={users}/>} />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </Router>

  );
}

export default App;

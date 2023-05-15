import React, { useContext } from 'react';
import LoginPage from './pages/LoginPage';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from "./ctx/userContext"

function App() {
  const Userctx = useContext(UserContext);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {Userctx.userName && < Route path="/chats" element={<ChatPage />} />}
      </Routes>
    </Router>

  );
}

export default App;

import React, { useContext, useEffect } from "react";
import LoginPage from './pages/LoginPage';
import './App.css';
import RegisterPage from './pages/RegisterPage';
import ChatPage from './pages/ChatPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserContext } from "./ctx/userContext"
import io from 'socket.io-client';


function App() {
  const Userctx = useContext(UserContext);


  useEffect(() => {
    console.log("hi");
    const temp = io('http://localhost:8080')
    Userctx.setSocket(temp);

  }, [])
  return (
    <Router>
      <Routes>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<ChatPage />} />

      </Routes>
    </Router>

  );
}

export default App;

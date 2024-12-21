import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistration = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      alert('Email already exists');
    } else {
      const newUser = { email, password };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      navigate('/login');
    }
  };

  return (
    <div className="container-fluid bg-image h-screen">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-6 col-lg-4 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-center">Registration</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="form-control mb-4"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-control mb-4"
          />
          <button
            onClick={handleRegistration}
            className="btn btn-primary w-100"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((user) => user.email === email && user.password === password);
    if (existingUser) {
      navigate('/dashboard');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="container-fluid bg-image h-screen">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-6 col-lg-4 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-center">Login</h2>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="form-control mb-4"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-control mb-4"
          />
          <button
            onClick={handleLogin}
            className="btn btn-primary w-100"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div className="container-fluid bg-image h-screen">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12 col-md-6 col-lg-4 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold mb-4 text-center">Dashboard</h2>
          <p>Welcome to the dashboard!</p>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
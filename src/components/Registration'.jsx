import React, { useState } from 'react';
import '../styles/registration.css';
import logo from '../assets/images/logo.png'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
  };

  return (
    <div className="registration-container">
      <div className="registration-card">
        <div className="registration-header">
          <img src={logo} alt="Botiga Logo" className="registration-logo" />
          <h2 className="registration-title">Create an account</h2>
        </div>
        <form className="registration-form" onSubmit={handleRegistration}>
          <input
            type="text"
            className="registration-input"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            className="registration-input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="registration-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            className="registration-input"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button type="submit" className="registration-button">
            Register
          </button>
        </form>
        <div className="social-registration">
          <button className="google-registration">
            <FcGoogle /> Sign up with Google
          </button>
          <button className="apple-registration">
            <FaGithub /> Sign up with Git hub
          </button>
        </div>
        <div className="registration-options">
          <span>Already have an account?</span>
          <a href="/login" className="login-link">
            Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default Registration;
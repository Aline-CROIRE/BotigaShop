import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/registration.css';
import logo from '../assets/images/logo.png';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const isPasswordStrong = (password) => {
    return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /\d/.test(password) && /[!@#$%^&*]/.test(password);
  };

  const handleRegistration = (e) => {
    e.preventDefault();
    
    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }
    
    if (!isPasswordStrong(password)) {
      setErrorMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return ('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
    }
    
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match!');
      return ('Passwords do not match!');
    }
    
    setErrorMessage('');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    
    // Simulating successful registration
    setTimeout(() => {
      navigate('/login');
    }, 500); // Redirects after 0.5 seconds
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
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button type="submit" className="registration-button">
            Register
          </button>
        </form>
        <div className="social-registration">
          <button className="google-registration">
            <FcGoogle /> Sign up with Google
          </button>
          <button className="apple-registration">
            <FaGithub /> Sign up with GitHub
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

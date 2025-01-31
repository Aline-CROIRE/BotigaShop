import React, { useState } from 'react';
import '../styles/login.css';
import logo from '../assets/images/logo.png';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Remember me:', rememberMe);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={logo} alt="Botiga Logo" className="login-logo" />
          <h2 className="login-title">Welcome back!</h2>
        </div>
        <form className="login-form" onSubmit={handleLogin}>
          <input
            type="text"
            className="login-input"
            placeholder="Username or Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="login-options">
            <div className="remember-me">
              <input
                type="checkbox"
                className="remember-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label className="remember-label">Remember for 30 days</label>
            </div>
            <a href="#" className="forgot-password">
              Forgot password?
            </a>
          </div>
        </form>
        <div className="social-login">
          <button className="google-login">
            <FcGoogle />
            Sign in with Google
          </button>
          <button className="apple-login">
            <FaGithub /> Sign in with Git hub
          </button>
        </div>
        <div className="login-options">
          <span>Don't have an account?</span>
          <a href="/register" className="sign-up-link">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
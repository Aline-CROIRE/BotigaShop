import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Login = ({ closeSignin, openRegister }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Remember me:", rememberMe);
    setTimeout(() => {
      navigate("/shop");
    }, 500); // Redirects after 0.5 seconds
  };

  return (
    <div className="login-overlay">
      <div className="login-container">
        <div className="login-card">
          <button className="close-button" onClick={closeSignin}>
            <FiX size={24} />
          </button>
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
            <button className="github-login">
              <FaGithub /> Sign in with GitHub
            </button>
          </div>
          <div className="login-options">
            <span>Don't have an account?</span>
            <a className="sign-up-link" onClick={openRegister}>
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

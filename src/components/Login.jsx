import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import logo from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";

const Login = ({ closeSignin, openRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState(""); // Error message state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear any previous error messages

    try {
      const response = await fetch("https://botigashop-api.onrender.com/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed. Please check your credentials.");
        return;
      }

      // Login successful
      const data = await response.json();
      const token = data.token; // Assuming API returns a token
      localStorage.setItem("token", token); // Store token in local storage
      console.log("Login successful, token:", token);

      // Close the login overlay
      closeSignin();

      // Redirect to /shop
      navigate("/shop");

    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("An unexpected error occurred during login.");
    }
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
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <input
              type="email"
              className="login-input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              <button type="button" className="forgot-password">
                Forgot password?
              </button>
            </div>
          </form>
          <div className="social-login">
            <button className="google-login">
              <FcGoogle />
              Sign in with Google
            </button>
            <button className="github-login">
              <FaGithub />
              Sign in with GitHub
            </button>
          </div>
          <div className="login-options">
            <span>Don't have an account?</span>
            <button className="sign-up-link" onClick={openRegister}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

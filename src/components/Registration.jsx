import { useState } from "react";
import "../styles/registration.css";
import logo from "../assets/images/logo.png";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import Login from "./Login";

const Registration = ({ closeRegister }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoginOpen, setIsLoginOpen] = useState(false);
    const [registrationSuccess, setRegistrationSuccess] = useState(false);

    const isPasswordStrong = (password) => {
        return (
            password.length >= 8 &&
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /\d/.test(password) &&
            /[!@#$%^&*]/.test(password)
        );
    };

    const handleRegistration = async (e) => {
        e.preventDefault();
        setErrorMessage(""); // Clear previous errors

        if (!name || !email || !password || !confirmPassword) {
            setErrorMessage("All fields are required!");
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            return;
        }

        if (!isPasswordStrong(password)) {
            setErrorMessage("Password must be at least 8 characters long, include uppercase, lowercase, a number, and a special character.");
            return;
        }

        try {
            const response = await fetch("https://botigashop-api.onrender.com/api/users/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password, confirmPassword }), // ✅ Ensure confirmPassword is included
            });

            const data = await response.json(); // Parse response

            if (!response.ok) {
                setErrorMessage(data.message || `Registration failed: ${response.statusText}`);
                return;
            }

            setRegistrationSuccess(true);
            setTimeout(() => {
                setIsLoginOpen(true); // Switch to login form
            }, 2000);
        } catch (error) {
            console.error("Registration error:", error);
            setErrorMessage("An unexpected error occurred. Please try again.");
        }
    };

    if (isLoginOpen) {
        return <Login closeSignin={() => setIsLoginOpen(false)} openRegister={() => setIsLoginOpen(false)} />;
    }

    return (
        <div className="registration-overlay">
            <div className="registration-container">
                <button className="close-button" onClick={closeRegister}>
                    <FiX />
                </button>
                <div className="registration-card">
                    <div className="registration-header">
                        <img src={logo} alt="Botiga Logo" className="registration-logo" />
                        <h2 className="registration-title">Create an account</h2>
                    </div>
                    {registrationSuccess ? (
                        <p className="success-message">Registration successful! Redirecting to login...</p>
                    ) : (
                        <form className="registration-form" onSubmit={handleRegistration}>
                            <input
                                type="text"
                                className="registration-input"
                                placeholder="Full Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
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
                    )}
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
                        <a className="login-link" onClick={() => setIsLoginOpen(true)}>
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;

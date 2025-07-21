import React, { useState } from "react";
// import API from "../api";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../securelytixlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("test@securelytix.com");
  const [password, setPassword] = useState("12345678");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(`https://securely-tix.onrender.com/api/auth/login`);

    try {
      const res = await axios.post(
        `https://securely-tix.onrender.com/api/auth/login`,
        {
          email,
          password,
          remember,
        }
      );

      localStorage.setItem("token", res.data.token);
localStorage.setItem("userEmail", res.data.user.email);  // Save email for header

      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Securelytix Logo" className="logo" />
        <h2>Welcome to Securelytix</h2>
        <p>Sign in to your account</p>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="test@securelytix.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="123456"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
          </div>
          <div className="remember">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <label>Remember me for 7 days</label>
          </div>
          <button type="submit">Sign In</button>
        </form>
        <p className="signup-text">
          Don't have an account?{" "}
          <span className="signup-link" onClick={() => navigate("/register")}>
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;

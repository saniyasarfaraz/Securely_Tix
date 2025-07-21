import React, { useState } from "react";
// import API from "../api";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../securelytixlogo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(`https://securely-tix.onrender.com/api/auth/register`);

    try {
      const res = await axios.post(
        `https://securely-tix.onrender.com/api/auth/register`,
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.msg || "registration failed");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Securelytix Logo" className="logo" />
        <p>Create Account</p>
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
            <label>Set Password</label>
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
          <button type="submit">Register</button>
        </form>
        <p className="signup-text">
          Already have an account?{" "}
          <span className="signup-link" onClick={() => navigate("/")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;

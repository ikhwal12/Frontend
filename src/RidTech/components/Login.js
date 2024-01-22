import React, { useState } from "react";
import "../styles/login-style.css";
import { Link, useNavigate } from "react-router-dom";
import logohd from "../assets/logohd.png";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/login", {
        username,
        password,
      });

      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="login-container">
        <div className="login-form">
          <img src={logohd} alt="" className="logohd" />
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button className="loginbtn" type="submit" disabled={isLoading}>
              Login
            </button>
            <p className="alternative">Don't Have Account?</p>
            <button className="signupbtn" type="submit">
              <Link to="/register">Sign Up</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;

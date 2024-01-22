import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/register.css";
import logohd from "../assets/logohd.png";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Password dan confirm passowrd tidak cocok");
      return;
    }

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:3001/register", {
        username,
        email,
        password,
        confirmPassword,
      });
      alert("registrasi sukses:", response.data.message);
      navigate("/login");
    } catch (error) {
      console.error("Registrasi gagal:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <img src={logohd} alt="" className="logohd" />
        <h2>Register</h2>
        <input
          placeholder="Username"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Email"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          placeholder="Confirm Password"
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button disabled={isLoading} type="submit" className="register-button">
          Register
        </button>
        <p className="login-here">
          Apakah Kamu sudah punya Akun? <Link to="/login">Login Di sini</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;

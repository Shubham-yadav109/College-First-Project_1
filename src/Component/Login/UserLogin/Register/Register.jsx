import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import Navber from "../../../Navbar/Navbar";
import Footer from "../../../Footer/Footer";

export default function Register() {
  const [showLogin, setShowLogin] = useState(false);
  const [registerData, setRegisterData] = useState({ name: "", email: "", password: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [userInfo, setUserInfo] = useState({ name: "", address: "", phone: "" });
  const [isEditable, setIsEditable] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const savedInfo = localStorage.getItem("userInfo");
    if (savedInfo) {
      setUserInfo(JSON.parse(savedInfo));
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "register") {
      setRegisterData((prev) => ({ ...prev, [name]: value }));
    } else if (type === "login") {
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else if (type === "user") {
      setUserInfo((prev) => ({ ...prev, [name]: value }));
    }
  };

  const showSuccessMessage = (text) => {
    setMessage(text);
    setShowSuccess(true);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9393/employee/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const resultText = await response.text();
      let result;
      try {
        result = JSON.parse(resultText);
      } catch {
        result = { message: resultText };
      }

      if (result.status === "success" || result.message.toLowerCase().includes("success")) {
        showSuccessMessage("✅ Register Successfully");
        setUserInfo({ ...userInfo, name: registerData.name });
        setRegisterData({ name: "", email: "", password: "" });
        setTimeout(() => setShowLogin(true), 2000);
      } else if (result.message.includes("Duplicate entry")) {
        setMessage("This Email Already Registered, Move to Login");
      } else {
        setMessage(result.message || "Registration failed");
      }
    } catch (error) {
      setMessage("Error processing registration");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9393/employee/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const resultText = await response.text();
      let result;
      try {
        result = JSON.parse(resultText);
      } catch {
        result = { message: resultText };
      }

      if (result.status === "success" || result.message.toLowerCase().includes("success")) {
        showSuccessMessage("✅ Login Successfully");
        const defaultName = loginData.email.split("@")[0];
        const updatedInfo = { name: defaultName, address: "", phone: "" };
        setUserInfo(updatedInfo);
        setIsLoggedIn(true);
        localStorage.setItem("userInfo", JSON.stringify(updatedInfo));
      } else {
        setMessage(result.message || "Login failed");
      }
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to logout?");
    if (confirmLogout) {
      setMessage("Logout Successful");
      setTimeout(() => {
        localStorage.removeItem("userInfo");
        setIsLoggedIn(false);
        navigate("/");
      }, 3000);
    }
  };

  const handleEditToggle = () => {
    setIsEditable(true);
  };

  const handleSave = () => {
    if (!userInfo.name || !userInfo.address || !userInfo.phone) {
      setMessage("Please fill all fields before saving.");
      return;
    }
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    setIsEditable(false);
    showSuccessMessage("✅ Information Saved");
  };

  return (
    <div className="login-main-container">
      <Navber />
      <div className="container">
        {message && (
          <div className={`popup-message ${showSuccess ? "success" : "error"}`}>
            {message}
          </div>
        )}
        {!isLoggedIn ? (
          !showLogin ? (
            <div className="form-box">
              <h2>User Register</h2>
              <form onSubmit={handleRegister}>
                <input type="text" name="name" placeholder="Name" value={registerData.name} onChange={(e) => handleInputChange(e, "register")} required />
                <input type="email" name="email" placeholder="Email" value={registerData.email} onChange={(e) => handleInputChange(e, "register")} required />
                <input type="password" name="password" placeholder="Password" value={registerData.password} onChange={(e) => handleInputChange(e, "register")} required />
                <button type="submit">Register</button>
              </form>
              <p>Already have an account? <span onClick={() => setShowLogin(true)}>Login here</span></p>
              <button className="admin-button" onClick={() => navigate("/adminlogin")}>Admin</button>
            </div>
          ) : (
            <div className="form-box">
              <h2>User Login</h2>
              <form onSubmit={handleLogin}>
                <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={(e) => handleInputChange(e, "login")} required />
                <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={(e) => handleInputChange(e, "login")} required />
                <button type="submit">Login</button>
              </form>
              <p>Don't have an account? <span onClick={() => setShowLogin(false)}>Register here</span></p>
              <button className="admin-button" onClick={() => navigate("/adminlogin")}>Admin</button>
            </div>
          )
        ) : (
          <div className="form-box">
            <h2>Welcome, {userInfo.name}</h2>
            <input type="text" name="name" placeholder="Name" value={userInfo.name} onChange={(e) => handleInputChange(e, "user")} readOnly={!isEditable} />
            <input type="text" name="address" placeholder="Address" value={userInfo.address} onChange={(e) => handleInputChange(e, "user")} readOnly={!isEditable} />
            <input type="text" name="phone" placeholder="Phone Number" value={userInfo.phone} onChange={(e) => handleInputChange(e, "user")} readOnly={!isEditable} />
            {!isEditable ? (
              <button onClick={handleEditToggle}>Edit</button>
            ) : (
              <button onClick={handleSave}>Save</button>
            )}
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}



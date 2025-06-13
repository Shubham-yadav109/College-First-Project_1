

import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import Footer from "../../Footer/Footer";
import Navbar from "../../Navbar/Navbar";

const AdminLogin = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [formData, setFormData] = useState({
    adminId: "",
    adminName: "",
    plantSell: "",
    contactNumber: "",
    shopAddress: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await axios.post("http://localhost:9393/admin/register", formData, {
          headers: { "Content-Type": "application/json" },
        });
        toast.success("Admin registered successfully!");
        setTimeout(() => setIsRegister(false), 2000);
      } else {
        const response = await axios.post(
          "http://localhost:9393/admin/login",
          new URLSearchParams({
            adminId: formData.adminId,
            password: formData.password,
          }),
          { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
        );
        toast.success(response.data);
        setTimeout(() => navigate("/adminhome"), 2000);
      }
    } catch (error) {
      toast.error(error.response?.data || "Something went wrong!");
    }
  };

  return (
    <div className="register-main-container">

      <Navbar/>
    <div className="container">
      <div className="form-box">
        <h2 className="form-title">{isRegister ? "Admin Register" : "Admin Login"}</h2>
        <form onSubmit={handleSubmit} className="form">
          <input type="text" name="adminId" placeholder="Admin ID" onChange={handleChange} required />

          {isRegister && (
            <>
              <input type="text" name="adminName" placeholder="Admin Name" onChange={handleChange} required />
              <input type="text" name="plantSell" placeholder="Plant Sell" onChange={handleChange} />
              <input type="text" name="contactNumber" placeholder="Contact Number" onChange={handleChange} />
              <textarea name="shopAddress" placeholder="Shop Address" onChange={handleChange} />
            </>
          )}

          <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

          <button type="submit" className="submit-btn">
            {isRegister ? "Register" : "Login"}
          </button>
          <button className="userRegister-button" onClick={() => navigate("/register")}>User Register</button>
        </form>

        <p className="toggle-text">
          {isRegister ? "Already registered? " : "Not registered? "}
          <button className="toggle-btn" onClick={() => setIsRegister(!isRegister)}>
            {isRegister ? "Login here" : "Register here"}
          </button>
        </p>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>

    <Footer/>
    </div>
  );
};

export default AdminLogin;



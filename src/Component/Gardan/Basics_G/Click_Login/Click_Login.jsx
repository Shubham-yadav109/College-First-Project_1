import React, { useState } from "react";
import "./Click_Login.css";

const Click_Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-form">
          <h2>{isLogin ? "Login" : "Register"}</h2>
          <form>
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="Enter your name" />
              </div>
            )}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" />
            </div>

            {isLogin && (
              <div className="forgot-password">
                <a href="#forgot">Forgot your password?</a>
              </div>
            )}
            <button type="submit" className="submit-btn">
              {isLogin ? "Sign In" : "Create Account"}
            </button>

            <button type="button" className="return-btn">
              Return to Shop
            </button>
          </form>

          <p className="toggle-link">
            {isLogin ? "Don't have an account yet?" : "Already have an account?"}{" "}
            <button onClick={toggleForm}>
              {isLogin ? "Create account" : "Login"}
            </button>
          </p>
        </div>

        <div className="auth-image">
          <img
            src="https://picsum.photos/600/600"
            alt="Auth Illustration"
            className="responsive-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Click_Login;

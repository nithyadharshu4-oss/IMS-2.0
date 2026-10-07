import React, { useState } from "react";
import "./LoginPage.css";
import { useNavigate } from "react-router-dom";
import ims from "../assets/loginpage/ims.png";
import mail from "../assets/loginpage/mail.png";
import lock from "../assets/loginpage/lock.png";
import eye from "../assets/loginpage/eye.png";
import eyeClose from "../assets/loginpage/eyeclose.png";
import google from "../assets/loginpage/google.png";
import arrow from "../assets/loginpage/arrow.png";
import yoy from "../assets/loginpage/yoy.png";
import deans from "../assets/loginpage/deans.png";
import login from "../assets/loginpage/login.png";
import protect from "../assets/loginpage/protect.png";

export const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Login Successful");

      console.log({
        email,
        password,
      });
    }
  };

  return (
    <div className="login-main">
  
      <div className="login-leftcontainer">

        <div className="login-navbar">
          <div className="login-logo">
            <img src={ims} alt="Internims" className="login-ims-image"  />

            <div className="login-logo-text">
              <h3>Internship Management System</h3>
              <p className="login-tagline">
  <span>Learn</span>
  <i></i>
  <span>Grow</span>
  <i></i>
  <span>Build</span>
</p>
            </div>
          </div>
        </div>


        <div className="login-left-content">
          <h1>
            Connecting academic talent with
            <br />
            career-defining corporate internships
          </h1>

          <p className="login-description">
            The verified enterprise portal synchronizing university dean
            approvals, experiential learning hours, and Fortune 500 mentorship
            agreements.
          </p>

          <div className="login-stats">
            <div className="login-stat-card">
              <h2>14,200+</h2>
              <p>ACTIVE INTERNS</p>
              <span><img src={yoy} alt="yoy"  className="login-yoy"/> 24% YoY</span>
            </div>

            <div className="login-stat-card">
              <h2>98.4%</h2>
              <p>CREDIT VERIFIED</p>
              <span style={{color:"#176789" }}> <img src={deans} alt="deans" className="login-yoy"/> Deans Approved</span>
            </div>

            <div className="login-stat-card">
              <h2>14,200+</h2>
              <p>ACTIVE INTERNS</p>
              <span><img src={yoy} alt="yoy" className="login-yoy"/> 24% YoY</span>
            </div>
          </div>


          <div className="login-illustration-container">
            <img
              src={login}
              alt="Internship management illustration"
              className="login-illustration"
            />
          </div>

          <div className="login-audit-card">
            <div><img src={protect} alt="protect" className="login-protect-img" /></div>

            <div className="login-audit-text">
              <p>
                “Automated audit trails cut academic credit clearance time from 14 days to under 48 hours.”
              
              <span>
                Dr. Elena Vance — Dean of Experiential Education, Northeastern Consortium
              </span></p>
            </div>
          </div>
        </div>
      </div>


      <div className="login-rightcontainer">
        <form className="login-box" onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>

          <p className="login-subtitle">Manage your career journey</p>

          <div className="login-field">
            <label>Email Address</label>

            <div className="login-input-box">
              <img src={mail} alt="Email" className="login-input-icon" />

              <input
                type="email"
                placeholder="Enter Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {errors.email && (
              <p className="login-error">{errors.email}</p>
            )}
          </div>

          <div className="login-password-row">
            <label>Password</label>

            <p
              className="login-forgot-link"
              onClick={() => navigate("/components-login/forgotpassword")}
            >
              Forgot Password?
            </p>
          </div>


          <div className="login-input-box">
            <img src={lock} alt="Password" className="login-input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <img
              src={showPassword ? eyeClose : eye}
              alt="Show password"
              className="login-eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          </div>

          {errors.password && (
            <p className="login-error">{errors.password}</p>
          )}


          <div className="login-remember">
            <input type="checkbox" id="keepSignedIn" />
            <label htmlFor="keepSignedIn">Keep me signed in</label>
          </div>


          <button className="login-signin-btn" type="submit">
            Sign In
            <img src={arrow} alt="Arrow" />
          </button>


          <div className="login-divider">
            <span></span>
            <p>OR CONTINUE WITH</p>
            <span></span>
          </div>

          <div className="login-google-align">
            <button type="button" className="login-google-btn">
              <img src={google} alt="Google" />
              Google
            </button>

            <p className="login-create">
              Don't have an account?{" "}
              <span
                className="login-create-link"
                onClick={() => navigate("/twostepverification")}
              >
                Create Account
              </span>
            </p>
          </div>


          <div className="login-footer-links">
            <a href="#help">Help</a>
            <span>•</span>
            <a href="#privacy">Privacy</a>
            <span>•</span>
            <a href="#terms">Terms</a>
          </div>
        </form>
      </div>
    </div>
  );
};
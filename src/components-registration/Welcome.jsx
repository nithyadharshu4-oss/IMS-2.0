import React from 'react';
import "./Welcome.css";
import welcome from "../assets/welcome/welcome.png";
import baricon from "../assets/welcome/barchart.png";
import security from "../assets/welcome/security.png";

export const  Welcome=()=> {
  return (
    <div className="ims-welcome-main-container">
        <div className="ims-welcome-left-container">

            <div className="ims-welcome-title">
                <h2 className="ims-welcome-heading">Welcome to your career<br/>collaborative workspace.</h2>
                 <p className="ims-welcome-subheading">Join over 14,000+ ambitious students, corporate mentors, leading enterprises, and <br/>academic institutions shaping the future of workforce talent.</p>
                </div> 

             <div className="ims-welcome-illustration-container">
    <img src={welcome} alt="welcome-img" className="ims-welcome-img"/>
  
              </div>

              <div className="ims-welcome-audit">

                <div className="ims-welcome-audit-card">
                <img src={baricon} alt="baricon" className="ims-welcome-icon"/>
                <div className="ims-welcome-audit-text">
                  <p className="ims-welcome-audit-heading">Unified Platform</p>
                  <p className="ims-welcome-audit-subheading">Seamless identity, role-based workflows, and organizational compliance</p>
              </div>
              </div>


              <div className="ims-welcome-audit-card">
              <img src={security} alt="security" className="ims-welcome-icon"/>
              <div className="ims-welcome-audit-text">
                  <p className="ims-welcome-audit-heading">Enterprise Security</p>
                  <p className="ims-welcome-audit-subheading">Zero-trust access with automated audit logs and real-time governance.</p>
              </div>
              </div>
              <hr className="hero-line" /> 
                </div> 
                 
                 <div className="ims-welcome-quote">
                    <p >“Empowering our cross-functional teams with seamless access, verified identity governance, and <br/>automated onboarding at global scale.”</p>
                    <span>Dr. Elena Vance — Dean of Experiential Education, Global University Network</span>
                    
</div>
                </div>   
    </div>
  );
}

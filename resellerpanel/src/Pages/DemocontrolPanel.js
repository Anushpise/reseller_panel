
import React, { useState } from "react";
import "../assets/css/Democontrolpanel.css";
import { FaCopy, FaEye, FaToggleOn, FaToggleOff, FaClock, FaUserCheck, FaShieldAlt } from "react-icons/fa";

export default function DemoControlPanel() {
  const [demoAccess, setDemoAccess] = useState(true);
  const [demoLink] = useState("https://demo.yourbrand.com/access?token=rslr-demo-8x9k2p");
  const [demoExpiry] = useState("31 March 2026");
  const [totalDemoViews] = useState(127);

  const copyLink = () => {
    navigator.clipboard.writeText(demoLink);
    alert("Demo link copied to clipboard!");
  };

  return (
    <div className="demo-control-page">
    
      <div className="header-section">
        <h1>Reseller Demo Control Panel</h1>
        <p>Manage client demo access — Fully separated from paid customers</p>
      </div>

      <div className="control-container">


        <div className="stats-grid">
          <div className="stat-item">
            <FaUserCheck className="stat-icon green" />
            <h4>Total Demo Views</h4>
            <p className="big">{totalDemoViews}</p>
          </div>
          <div className="stat-item">
            <FaClock className="stat-icon blue" />
            <h4>Demo Link Expiry</h4>
            <p className="big">{demoExpiry}</p>
          </div>
          <div className="stat-item">
            <FaShieldAlt className="stat-icon purple" />
            <h4>Security Status</h4>
            <p className="success">Protected</p>
            <small>No misuse detected</small>
          </div>
        </div>

        <div className="info-grid">
          <div className="info-box success">
            <h4>Reseller Demo Users Can:</h4>
            <ul>
              <li>Watch all video lessons</li>
              <li>Download resources</li>
              <li>Take quizzes (no score saved)</li>
              <li>Experience full portal like a real student</li>
            </ul>
          </div>
          <div className="info-box danger">
            <h4>Reseller Demo Users Cannot:</h4>
            <ul>
              <li>Get certificates</li>
              <li>Save progress</li>
              <li>Access after expiry</li>
              <li>Appear in your paid customer list</li>
            </ul>
          </div>
        </div>

        <div className="security-note">
          <strong>System automatically separates</strong> demo users from paying customers.<br />
          All demo activity is logged and monitored to prevent misuse.
        </div>

      </div>
    </div>
  );
}
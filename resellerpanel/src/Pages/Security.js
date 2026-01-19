
import React, { useState } from "react";
import "../assets/css/Security.css";
import { 
  FaShieldAlt, FaLock, FaKey, FaMobileAlt, FaEnvelope, 
  FaCheckCircle, FaTimesCircle, FaHistory, FaSignOutAlt,
  FaEye, FaEyeSlash, FaCopy
} from "react-icons/fa";

export default function ResellerSecurity() {
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [twoFAEnabled, setTwoFAEnabled] = useState(true);
  const [emailNotifications, setEmailNotifications] = useState(true);

  const loginHistory = [
    { date: "05 Dec 2025", time: "2:34 PM", device: "Chrome - Windows 11", ip: "122.168.45.210", location: "Mumbai, India" },
    { date: "04 Dec 2025", time: "11:18 AM", device: "Safari - iPhone 15", ip: "122.168.45.210", location: "Mumbai, India" },
    { date: "03 Dec 2025", time: "6:52 PM", device: "Chrome - MacBook Pro", ip: "122.168.45.210", location: "Delhi, India" },
  ];

  return (
    <div className="security-page">

      <div className="security-header">
        <div className="header-content">
          <FaShieldAlt className="shield-icon" />
          <div>
            <h1>Security & Privacy</h1>
            <p>Keep your reseller account safe and secure</p>
          </div>
        </div>
        <div className="security-score">
          <div className="score-circle">
            <span>94%</span>
          </div>
          <div>
            <strong>Excellent</strong>
            <p>Your account is very secure</p>
          </div>
        </div>
      </div>

      <div className="security-container">

        
        <div className="security-card">
          <div className="card-header">
            <FaLock className="icon" />
            <div>
              <h3>Change Password</h3>
              <p>Last changed: <strong>12 Oct 2025</strong></p>
            </div>
            <span className="status strong">Strong</span>
          </div>

          <div className="password-form">
            <div className="input-group">
              <label>Current Password</label>
              <div className="input-wrapper">
                <input type={showCurrent ? "text" : "password"} placeholder="••••••••" />
                <button onClick={() => setShowCurrent(!showCurrent)}>
                  {showCurrent ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="input-group">
              <label>New Password</label>
              <div className="input-wrapper">
                <input type={showNew ? "text" : "password"} placeholder="Enter strong password" />
                <button onClick={() => setShowNew(!showNew)}>
                  {showNew ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              <small className="strength">Use 8+ characters with letters, numbers & symbols</small>
            </div>

            <div className="input-group">
              <label>Confirm New Password</label>
              <div className="input-wrapper">
                <input type={showConfirm ? "text" : "password"} placeholder="Retype password" />
                <button onClick={() => setShowConfirm(!showConfirm)}>
                  {showConfirm ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button className="update-password-btn">
              Update Password
            </button>
          </div>
        </div>

     

      


      </div>
    </div>
  );
}
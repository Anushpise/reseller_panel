import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-container">

        <div className="footer-column about">
          <p>
            Learn Anytime, Anything & from Anywhere at your own Schedule.<br />
            Happy Learning!
          </p>

          <p>
            <strong>Company Name :</strong><br />
            VWX B2B OPC PVT LTD<br />
            S3 3rd Floor | Mahalaxmi Building | Narendra Nagar |<br />
            Nagpur 440015 | Maharashtra, India<br />
            Contact No : +91 7420847887
          </p>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Dashboard</h3>
          <ul>
            <li><Link to="/dashboard/today">Today Sales</Link></li>
            <li><Link to="/dashboard/monthly">Monthly Overview</Link></li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h3 className="footer-heading">Onboarding</h3>
          <ul>
            <li><Link to="/register">Reseller Signup</Link></li>
            <li><Link to="/onboarding/subscription">Subscription Plan</Link></li>
            <li><Link to="/onboarding/payment">Make Payment</Link></li>
            <li><Link to="/onboarding/activation">Activation Success</Link></li>
          </ul>
        </div>

      
        <div className="footer-column">
          <h3 className="footer-heading">Catalog</h3>
          <ul>
            <li><Link to="/courses">All Courses</Link></li>
            <li><Link to="/courses/preview">Course Preview</Link></li>
            <li><Link to="/courses/price">Set Selling Price</Link></li>
            <li><Link to="/demo">Demo Portal</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Branding</h3>
          <ul>
            <li><Link to="/branding">Logo & Theme</Link></li>
            <li><Link to="/branding/invoice-config">Invoice Settings</Link></li>
          </ul>
        </div>

        
        <div className="footer-column">
          <h3 className="footer-heading">Access</h3>
          <ul>
            <li><Link to="/access/my-learning">My Learning (Free)</Link></li>
            <li><Link to="/access/demo-control">Demo Control Panel</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3 className="footer-heading">Finance</h3>
          <ul>
            <li><Link to="/finance/earnings">Earnings Overview</Link></li>
            <li><Link to="/finance/billing">Billing & Invoices</Link></li>
            <li><Link to="/finance/statement">Monthly Statement</Link></li>
          </ul>
        </div>

       
        <div className="footer-column">
          <h3 className="footer-heading">Orders</h3>
          <ul>
            <li><Link to="/orders">All Orders</Link></li>
            <li><Link to="/orders/123">Order Details</Link></li>
          </ul>
        </div>

     
        <div className="footer-column">
          <h3 className="footer-heading">Settings</h3>
          <ul>
            <li><Link to="/settings/profile">Profile</Link></li>
            <li><Link to="/settings/security">Security</Link></li>
          </ul>
        </div>
<div className="footer-column">
          <h3 className="footer-heading">Privacy policy</h3>
          <ul>
         <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions">Terms and Conditions</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
          </ul>
        </div>
      </div>
      

      <div className="footer-bottom">
        <p>Copyright © 2025 VWX B2B (OPC) PVT LTD. All Rights Reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;


import React from "react";
import { useSelector } from "react-redux";
import "../assets/css/ResellerProfile.css";
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaBuilding, 
  FaGlobe, 
  FaInstagram, 
  FaFacebook, 
  FaLinkedin, 
  FaYoutube,
  FaEdit, 
  FaCheckCircle, 
  FaClock, 
  FaRupeeSign, 
  FaCrown,
  FaBookOpen
} from "react-icons/fa";

export default function ResellerProfile() {
  const { reseller, subscriptionActive, subscription } = useSelector(state => state.reseller);

  if (!reseller) {
    return (
      <div className="profile-loading">
        <p>Please login to view your profile.</p>
      </div>
    );
  }

  const stats = {
    totalStudents: reseller.totalStudents || 842,
    totalEarnings: reseller.totalEarnings || 1248500,
    totalCourses: reseller.totalCourses || 12,
    activeSince: "15 Jan 2024"
  };

  return (
    <div className="reseller-profile-master">

     
      <div className="profile-hero">
        <div className="hero-content">
          <div className="avatar-large">
            {reseller.profileImg ? (
              <img src={reseller.profileImg} alt={reseller.name} />
            ) : (
              <div className="avatar-placeholder">
                <FaUser />
              </div>
            )}
          </div>
          <div className="hero-info">
            <h1>{reseller.name}</h1>
            <p className="business-name">
              <FaBuilding /> {reseller.businessName || "Digital Academy"}
            </p>
            <div className="badges">
              <span className="badge premium">
                <FaCrown /> Premium Reseller
              </span>
              <span className="badge active">
                <FaCheckCircle /> Active Since {stats.activeSince}
              </span>
            </div>
          </div>
        </div>
      </div>

    
      <div className="stats-dashboard">
        <div className="stat-card">
          <FaUser className="icon" />
          <div>
            <h3>{stats.totalStudents.toLocaleString()}</h3>
            <p>Total Students</p>
          </div>
        </div>
        <div className="stat-card highlight">
          <FaRupeeSign className="icon" />
          <div>
            <h3>₹{stats.totalEarnings.toLocaleString()}</h3>
            <p>Total Earnings</p>
          </div>
        </div>
        <div className="stat-card">
          <FaBookOpen className="icon" />
          <div>
            <h3>{stats.totalCourses}</h3>
            <p>Courses Selling</p>
          </div>
        </div>
        <div className="stat-card success">
          <FaCheckCircle className="icon" />
          <div>
            <h3>{subscriptionActive ? "Active" : "Inactive"}</h3>
            <p>Subscription Status</p>
          </div>
        </div>
      </div>

     
      <div className="profile-details">

     
        <div className="info-section">
          <div className="section-header">
            <h2>Personal Information</h2>
            <button className="edit-btn"><FaEdit /> Edit</button>
          </div>
          <div className="info-grid">
            <div className="info-item">
              <FaUser /> <strong>Name:</strong> {reseller.name}
            </div>
            <div className="info-item">
              <FaEnvelope /> <strong>Email:</strong> {reseller.email}
            </div>
            <div className="info-item">
              <FaPhone /> <strong>Phone:</strong> {reseller.phone || "+91 98765 43210"}
            </div>
            <div className="info-item">
              <FaGlobe /> <strong>Website:</strong> 
              {reseller.website ? <a href={reseller.website} target="_blank" rel="noreferrer">{reseller.website}</a> : "Not added"}
            </div>
          </div>
        </div>

    
        <div className="info-section">
          <div className="section-header">
            <h2>Business Branding</h2>
            <button className="edit-btn">Update Branding</button>
          </div>
          <div className="branding-preview">
            <div className="logo-preview">
              {reseller.logoUrl ? (
                <img src={reseller.logoUrl} alt="Logo" />
              ) : (
                <div className="logo-placeholder">Your Logo</div>
              )}
            </div>
            <div className="branding-info">
              <p><strong>Company:</strong> {reseller.businessName}</p>
              <p><strong>Branding Status:</strong> 
                <span className={reseller.logoUrl ? "status-complete" : "status-pending"}>
                  {reseller.logoUrl ? "Completed" : "Pending Setup"}
                </span>
              </p>
            </div>
          </div>
        </div>

  
        <div className="info-section">
          <div className="section-header">
            <h2>Subscription Plan</h2>
            <button className="upgrade-btn">Upgrade Plan</button>
          </div>
          <div className="plan-card">
            <div className="plan-header">
              <h3>{subscription?.name || "Pro Reseller Plan"}</h3>
              <div className="plan-price">₹{subscription?.price || "999"}<small>/year</small></div>
            </div>
            <ul className="features">
              <li>Unlimited Students</li>
              <li>Full White-Label Portal</li>
              <li>90% Revenue Share</li>
              <li>Priority Support</li>
              <li>Custom Domain</li>
            </ul>
            <div className="plan-footer">
              <p><FaClock /> Next Billing: {subscription?.nextBilling || "15 Jan 2026"}</p>
              <button className="renew-btn">Renew Now</button>
            </div>
          </div>
        </div>

        
        <div className="info-section">
          <div className="section-header">
            <h2>Social Media</h2>
          </div>
          <div className="social-links">
            <a href={reseller.instagram || "#"} className="social-btn instagram">
              <FaInstagram /> Instagram
            </a>
            <a href={reseller.facebook || "#"} className="social-btn facebook">
              <FaFacebook /> Facebook
            </a>
            <a href={reseller.linkedin || "#"} className="social-btn linkedin">
              <FaLinkedin /> LinkedIn
            </a>
            <a href={reseller.youtube || "#"} className="social-btn youtube">
              <FaYoutube /> YouTube
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

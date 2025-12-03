import React from "react";
import { useSelector } from "react-redux";
import "./ResellerProfile.css";

const ResellerProfile = () => {
  const { user, resellerBranding } = useSelector((state) => state.user);

  if (!user) {
    return <div className="p-6">Please login to view your profile.</div>;
  }

  return (
    <div className="profile-wrapper">

     
      <div className="profile-header"> 
        <h2>Reseller Profile</h2>
        <p>View & Update your profile details</p>
      </div>

      <div className="stats-grid">
        <div className="stat-box">
          <h3>{user.totalStudents || 0}</h3>
          <p>Total Students</p>
        </div>
        <div className="stat-box">
          <h3>{user.totalCourses || 0}</h3>
          <p>Courses</p>
        </div>
        <div className="stat-box">
          <h3>{user.totalSales || "₹0"}</h3>
          <p>Total Sales</p>
        </div>
        <div className="stat-box">
          <h3>{user.activeSubscriptions || 0}</h3>
          <p>Active Subscriptions</p>
        </div>
      </div>

      {/* PERSONAL INFO */}
      <div className="profile-section">
        <div className="section-header">
          <h3>Your Information</h3>
          <button className="edit-btn">Edit</button>
        </div>

        <div className="profile-card">
          <img src={user.profileImg || "/default-avatar.png"} className="profile-img" alt="" />
          <div className="profile-info">
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
          </div>
        </div>
      </div>

      {/* COMPANY BRANDING */}
      <div className="profile-section">
        <div className="section-header">
          <h3>Company Branding</h3>
          <button className="edit-btn">Update</button>
        </div>

        <div className="profile-card">
          <img src={resellerBranding.logoUrl || "/placeholder-logo.png"} className="company-logo" alt="Logo" />
          <div className="profile-info">
            <p><strong>Company:</strong> {resellerBranding.companyName || user.name}</p>
            <p><strong>Status:</strong> Branding {resellerBranding.logoUrl ? "Completed ✔" : "Pending"}</p>
          </div>
        </div>
      </div>

      {/* PLAN INFO */}
      <div className="profile-section">
        <div className="section-header">
          <h3>Subscription Plan</h3>
          <button className="edit-btn">Upgrade</button>
        </div>

        <div className="plan-card">
          <h4>{user.plan?.name || "Free Plan"}</h4>
          <div className="plan-price">{user.plan?.price || "₹0"}</div>

          <ul>
            {user.plan?.features?.map((f, i) => (
              <li key={i}>{f}</li>
            ))}
          </ul>

          <p><strong>Expiry:</strong> {user.plan?.expiry || "N/A"}</p>

          <button className="renew-btn">Renew Plan</button>
        </div>
      </div>

      {/* ACCOUNT SETTINGS */}
      <div className="profile-section">
        <div className="section-header">
          <h3>Account Settings</h3>
        </div>

        <div className="settings-card">
          <button>Change Password</button>
          <button>Payment Settings</button>
          <button>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default ResellerProfile;

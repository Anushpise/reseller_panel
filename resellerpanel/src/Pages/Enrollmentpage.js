
import React from "react";
import "../assets/css/Enrollment.css";
import {
  FaTimes,
  FaUser,
  FaEnvelope,
  FaBookOpen,
  FaRupeeSign,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaTrophy,
  FaDownload,
} from "react-icons/fa";

export default function EnrollmentDetailsModal({ order, onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
      
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

      
        <div className="modal-header">
          <div className="student-avatar">
            <FaUser className="avatar-icon" />
          </div>
          <div>
            <h2>{order.studentName}</h2>
            <p className="email">
              <FaEnvelope /> {order.email}
            </p>
          </div>
          <div className="status-badge success">
            <FaCheckCircle /> Enrollment Active
          </div>
        </div>

       
        <div className="course-card">
          <div className="course-thumbnail">
            <div className="placeholder-img"></div>
          </div>

          <div className="course-info">
            <h3>
              <FaBookOpen /> {order.course}
            </h3>

            <div className="progress-section">
              <div className="progress-label">
                <span>Course Progress</span>
                <strong>{order.progress}% Complete</strong>
              </div>

              <div className="progress-bar-large">
                <div
                  className="progress-fill-large"
                  style={{ width: `${order.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="details-grid">
          <div className="detail-item">
            <FaRupeeSign className="icon purple" />
            <div>
              <small>Amount Paid</small>
              <strong>₹{order.amount.toLocaleString("en-IN")}</strong>
            </div>
          </div>

          <div className="detail-item">
            <FaCalendarAlt className="icon blue" />
            <div>
              <small>Purchase Date</small>
              <strong>{order.date}</strong>
              <small className="time">{order.time}</small>
            </div>
          </div>

          <div className="detail-item">
            <FaClock className="icon green" />
            <div>
              <small>Last Active</small>
              <strong>{order.lastActive}</strong>
            </div>
          </div>

          <div className="detail-item trophy">
            <FaTrophy className="icon gold" />
            <div>
              <small>Certificate Status</small>
              <strong>{order.progress === 100 ? "Issued" : "Pending"}</strong>
            </div>
          </div>
        </div>

        
        <div className="action-buttons">
          <button className="btn-primary">
            <FaDownload /> Download Invoice
          </button>
        
          <button className="btn-outline">View Full Progress</button>
        </div>

       
        <div className="modal-footer">
          <p>
            This enrollment was made through <strong>your branded reseller portal</strong>.<br />
            You earned{" "}
            <strong>
              ₹{Math.round(order.amount * 0.9).toLocaleString("en-IN")}
            </strong>{" "}
            commission
          </p>
        </div>
      </div>
    </div>
  );
}

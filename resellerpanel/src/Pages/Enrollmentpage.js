import React from "react";
import "./Orders.css";

export default function EnrollmentDetails({ order, close }) {
  // Safety check
  if (!order) return null;

  const { name, email, course, progress, modulesCompleted, lastLogin } = order;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        {/* Close Button */}
        <button className="close-btn" onClick={close}>×</button>

        <h2>Enrollment Details</h2>

        {/* Student Info */}
        <div className="student-info">
          <p><strong>Student:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Course:</strong> {course}</p>
        </div>

        <hr />

        {/* Progress Report */}
        <h3>Progress Report</h3>
        <div className="progress-details">
          <p><strong>Course Progress:</strong> {progress}%</p>
          <p><strong>Modules Completed:</strong> {modulesCompleted}</p>
          <p><strong>Last Login:</strong> {lastLogin}</p>

          {/* Progress Bar */}
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

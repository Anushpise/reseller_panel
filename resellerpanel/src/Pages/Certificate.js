import React from "react";
import { FaDownload } from "react-icons/fa";
import "./Certificates.css";

export default function Certificates({ completedCourses = [] }) {
  const dummyReseller = {
    brand: "Your Reseller Academy",
    logo: "https://via.placeholder.com/120x120?text=LOGO", 
    signature: "https://via.placeholder.com/150x50?text=Sign",
    gst: "27ABCDE1234F1Z5",
  };

  const handleDownload = (course) => {
    alert(` Certificate downloading for: ${course.title}`);
  };

  if (completedCourses.length === 0) {
    completedCourses = [
      { id: 1, title: "Digital Marketing Mastery " },
    ];
  }

  return (
    <div className="certificates">
      <h2>Certificates </h2>

      <div className="certificate-grid">
        {completedCourses.map((course) => (
          <div key={course.id} className="certificate-card">
            
            <div className="certificate-paper">
              <div className="cert-border">

                <img src={dummyReseller.logo} className="cert-logo" alt="logo" />

                <h1 className="cert-heading">Certificate of Completion</h1>

                <p className="cert-sub">This is to certify that</p>

                <h2 className="cert-name">John Doe</h2>

                <p className="cert-sub">has successfully completed the course</p>

                <h3 className="cert-course">{course.title}</h3>

                <p className="cert-issued">Issued By: {dummyReseller.brand}</p>

                <div className="cert-sign-section">
                  <img src={dummyReseller.signature} className="cert-sign" alt="sign" />
                  <p className="cert-sign-text">Authorized Signature</p>
                </div>

                <p className="cert-gst">GSTIN: {dummyReseller.gst}</p>

              </div>
            </div>

            <button className="download-btn" onClick={() => handleDownload(course)}>
              <FaDownload /> Download Certificate 
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}


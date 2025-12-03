import React from "react";
import "./Payouts.css";
import { FaDownload } from "react-icons/fa";

export default function MonthlyStatement() {
  const statement = {
    month: "December 2025",
    totalSales: 55,
    grossRevenue: 82350,
    platformFee: 12500,
    netEarnings: 69850,
  };

  const handleDownload = () => {
    alert("Downloading Monthly Statement PDF...");
  };

  return (
    <div className="statement-box">
      <h2>Monthly Statement</h2>

      <div className="summary-grid">
        <div className="sum-item">
          <p>Total Sales</p>
          <h3>{statement.totalSales}</h3>
        </div>
        <div className="sum-item">
          <p>Gross Revenue</p>
          <h3>₹{statement.grossRevenue.toLocaleString()}</h3>
        </div>
        <div className="sum-item">
          <p>Platform Fee</p>
          <h3>₹{statement.platformFee.toLocaleString()}</h3>
        </div>
        <div className="sum-item green">
          <p>Your Net Earnings</p>
          <h3>₹{statement.netEarnings.toLocaleString()}</h3>
        </div>
      </div>

      <button className="download-btn" onClick={handleDownload}>
        <FaDownload /> Download Full PDF
      </button>
    </div>
  );
}

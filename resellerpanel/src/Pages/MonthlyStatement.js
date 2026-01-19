
import React from "react";
import "../assets/css/MonthlyStatement.css";
import { FaDownload, FaFilePdf, FaCalendarAlt, FaRupeeSign } from "react-icons/fa";

export default function MonthlyStatement() {
 const statement = {
  month: "December",
  year: "2025",
  period: "01 Dec - 31 Dec 2025",
  totalSales: 78,
  grossRevenue: 128450,
  platformFee: 12845,
  tds: 1285,
  netEarnings: 114320,
  payoutDate: "05 Jan 2026",
};


  const handleDownload = () => {
   
    alert("Monthly Statement PDF downloading... Check your downloads folder!");
  
  };

  return (
    <div className="monthly-statement-container">
  
      <div className="statement-header">
        <h1>Monthly Earnings Statement</h1>
        <p className="period">{statement.period}</p>
      </div>

     
      <div className="statement-card">
        <div className="card-header">
          <div className="logo-placeholder">
            <FaFilePdf className="pdf-icon" />
            <span>Statement</span>
          </div>
          <button className="download-btn" onClick={handleDownload}>
            <FaDownload />
            Download PDF
          </button>
        </div>

      
        <div className="summary-grid">
          <div className="summary-item">
            <p className="label">Total Orders</p>
            <h3 className="value">{statement.totalSales}</h3>
          </div>
          <div className="summary-item">
            <p className="label">Gross Revenue</p>
            <h3 className="value">₹{statement.grossRevenue.toLocaleString("en-IN")}</h3>
          </div>
          <div className="summary-item danger">
            <p className="label">Platform Fee (10%)</p>
            <h3 className="value">-₹{statement.platformFee.toLocaleString("en-IN")}</h3>
          </div>
          <div className="summary-item danger">
            <p className="label">TDS (1%)</p>
            <h3 className="value">-₹{statement.tds.toLocaleString("en-IN")}</h3>
          </div>
          <div className="summary-item success big">
            <p className="label">Your Net Earnings</p>
            <h3 className="value">₹{statement.netEarnings.toLocaleString("en-IN")}</h3>
            <p className="payout-info">
              <FaCalendarAlt /> Will be paid on <strong>{statement.payoutDate}</strong>
            </p>
          </div>
        </div>

  
        <div className="transaction-table">
          <h3>Transaction Summary</h3>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Debit</th>
                <th>Credit</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01 Dec 2025</td>
                <td>Opening Balance</td>
                <td>-</td>
                <td>-</td>
                <td>₹0</td>
              </tr>
              <tr className="highlight">
                <td>15 Dec 2025</td>
                <td>Course Sales (65 orders)</td>
                <td>-</td>
                <td>₹1,15,605</td>
                <td>₹1,15,605</td>
              </tr>
              <tr>
                <td>20 Dec 2025</td>
                <td>Platform Fee Deduction</td>
                <td>₹11,560</td>
                <td>-</td>
                <td>₹1,04,045</td>
              </tr>
              <tr>
                <td>25 Dec 2025</td>
                <td>Course Sales (13 orders)</td>
                <td>-</td>
                <td>₹12,845</td>
                <td>₹1,16,890</td>
              </tr>
              <tr>
                <td>31 Dec 2025</td>
                <td>TDS Deduction (1%)</td>
                <td>₹1,285</td>
                <td>-</td>
                <td>₹1,15,605</td>
              </tr>
              <tr className="final-balance">
                <td colSpan={3}><strong>Closing Balance (Payable)</strong></td>
                <td></td>
                <td><strong>₹{statement.netEarnings.toLocaleString("en-IN")}</strong></td>
              </tr>
            </tbody>
          </table>
        </div>

   
        <div className="footer-note">
          <p>This statement is auto-generated. Payout will be processed via Bank Transfer on <strong>{statement.payoutDate}</strong></p>
        </div>
      </div>
    </div>
  );
}
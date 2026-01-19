import React from "react";
import { FaDownload, FaEnvelope, FaFileInvoice } from "react-icons/fa";

import "../assets/css/invoice.css"
export default function Invoice({ sale }) {
const sampleSale = {
  id: "INV-2025-001",
  studentName: "Amit Sharma",
  studentEmail: "amit@gmail.com",
  courseName: "Digital Marketing Masterclass",
  amount: 2499,
  date: "2025-12-02",
  gstin: "27ABCDE1234F1Z5",
  resellerLogo: "https://via.placeholder.com/120x60",
  platformShare: 20 
};

  if (!sale) {
    return (
      <div className="invoice-empty">
        <FaFileInvoice size={50} />
        <h2>No Invoice Selected</h2>
        <p>Please click an order to view its invoice.</p>
      </div>
    );
  }

  const handleDownload = () => {
    alert(`Downloading branded invoice for ${sale.studentName}`);
  };

  const handleEmail = () => {
    alert(`Emailing invoice to ${sale.studentEmail}`);
  };

  return (
    <div className="invoice-container">
    
      <div className="invoice-header">
        <div>
          <h1>Branded GST Invoice</h1>
          <p>Generated Automatically for Reseller</p>
        </div>
        <img
          src={sale.resellerLogo}
          alt="Logo"
          className="invoice-logo"
        />
      </div>

      <hr />

    
      <div className="invoice-section">
        <h3>Student Details</h3>
        <p><strong>Name:</strong> {sale.studentName}</p>
        <p><strong>Email:</strong> {sale.studentEmail}</p>
      </div>

      <hr />

      <div className="invoice-section">
        <h3>Course Purchased</h3>
        <p><strong>Course:</strong> {sale.courseName}</p>
        <p><strong>Amount Paid:</strong> ₹{sale.amount}</p>
        <p><strong>Purchase Date:</strong> {sale.date}</p>
      </div>

      <hr />

      <div className="invoice-section">
        <h3>GST Details</h3>
        <p><strong>Reseller GSTIN:</strong> {sale.gstin}</p>
        <p><strong>Invoice ID:</strong> {sale.id}</p>
        <p><strong>Platform Split:</strong> {sale.platformShare}%</p>
      </div>

      <hr />

     
      <div className="invoice-actions">
        <button className="download" onClick={handleDownload}>
          <FaDownload /> Download PDF
        </button>

        <button className="email" onClick={handleEmail}>
          <FaEnvelope /> Email Invoice
        </button>
      </div>
    </div>
  );
}

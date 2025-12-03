import React from "react";
import "./Payouts.css";

export default function TransactionHistory() {
  const transactions = [
    {
      id: "TXN001",
      student: "Amit Verma",
      course: "Digital Marketing Pro",
      amount: 1499,
      platformFee: 300,
      resellerShare: 1199,
      date: "2025-12-01",
      transferredOn: "2025-12-02",
      status: "Paid"
    },
    {
      id: "TXN002",
      student: "Riya Sharma",
      course: "AI Tools Mastery",
      amount: 999,
      platformFee: 200,
      resellerShare: 799,
      date: "2025-11-29",
      transferredOn: "2025-11-30",
      status: "Paid"
    }
  ];

  return (
    <div className="payouts-page">
      <h1>Payouts & Earnings</h1>
      <h2>Transaction History</h2>

      <div className="payout-table-container">
        <table className="payout-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Course</th>
              <th>Amount</th>
              <th>Platform Fee</th>
              <th>Your Share</th>
              <th>Order Date</th>
              <th>Transferred On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((t, index) => (
              <tr key={index}>
                <td>{t.student}</td>
                <td>{t.course}</td>
                <td>₹{t.amount}</td>
                <td>₹{t.platformFee}</td>
                <td className="green">₹{t.resellerShare}</td>
                <td>{t.date}</td>
                <td>{t.transferredOn}</td>
                <td className={t.status === "Paid" ? "paid" : "pending"}>
                  {t.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

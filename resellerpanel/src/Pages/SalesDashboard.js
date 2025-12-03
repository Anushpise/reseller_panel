import React, { useState, useEffect } from "react";
import { FaRupeeSign } from "react-icons/fa";
import "./SalesDashboard.css";

export default function SalesDashboard() {
  const today = new Date().toLocaleDateString("en-CA"); // YYYY-MM-DD format

  // SAMPLE DATA (you can replace with API)
  const initialData = [
    { date: today, orders: 5, revenue: 3500, platformCut: 350, myShare: 3150 },
    { date: "2025-12-01", orders: 12, revenue: 12450, platformCut: 1245, myShare: 11205 },
    { date: "2025-11-30", orders: 20, revenue: 20400, platformCut: 2040, myShare: 18360 },
    { date: "2025-11-29", orders: 15, revenue: 15750, platformCut: 1575, myShare: 14175 },
  ];

  const [salesData, setSalesData] = useState(initialData);
  const [todaySales, setTodaySales] = useState(0);
  const [monthlyEarnings, setMonthlyEarnings] = useState(
    initialData.reduce((acc, row) => acc + row.myShare, 0)
  );

  // // Live counter for today's sales
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTodaySales(prev => prev + Math.floor(Math.random() * 120));

  //     // Update today's row
  //     setSalesData(prev =>
  //       prev.map(row =>
  //         row.date === today
  //           ? {
  //               ...row,
  //               revenue: row.revenue + Math.floor(Math.random() * 80),
  //               myShare: row.myShare + Math.floor(Math.random() * 60),
  //             }
  //           : row
  //       )
  //     );
  //   }, 1500);

  //   return () => clearInterval(interval);
  // }, [today]);

  return (
    <div className="sales-dashboard">
      <h1>Sales Dashboard</h1>

      <div className="cards">
        <div className="card today">
          <h2>Today's Sales</h2>
          <p className="value">
            <FaRupeeSign /> {todaySales.toLocaleString()}
          </p>
          <span className="tag"></span>
        </div>

        <div className="card month">
          <h2>This Month Earnings</h2>
          <p className="value">
            <FaRupeeSign /> {monthlyEarnings.toLocaleString()}
          </p>
          <span className="tag"></span>
        </div>
      </div>

      {/* SALES TABLE */}
      <div className="table-container">
        <h3>Sales Overview</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Orders</th>
              <th>Total Revenue</th>
              <th>Platform Cut</th>
              <th>Your Share</th>
              <th>Trend</th>
            </tr>
          </thead>

          <tbody>
            {salesData.map((row, idx) => (
              <tr
                key={idx}
                className={row.date === today ? "today-row" : ""}
              >
                <td>{row.date}</td>
                <td>{row.orders}</td>
                <td>
                  <FaRupeeSign /> {row.revenue.toLocaleString()}
                </td>
                <td>
                  <FaRupeeSign /> {row.platformCut.toLocaleString()}
                </td>
                <td>
                  <FaRupeeSign /> {row.myShare.toLocaleString()}
                </td>
                <td>📈</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

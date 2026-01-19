
import React, { useState, useEffect } from "react";
import { FaRupeeSign, FaArrowUp } from "react-icons/fa";
import "../assets/css/SalesDashboard.css";

export default function SalesDashboard() {
  const today = new Date().toLocaleDateString("en-CA");

  const initialData = [
    { date: today, orders: 8, revenue: 18450, platformCut: 1845, myShare: 16605 },
    { date: "2025-12-04", orders: 15, revenue: 28900, platformCut: 2890, myShare: 26010 },
    { date: "2025-12-03", orders: 22, revenue: 35700, platformCut: 3570, myShare: 32130 },
    { date: "2025-12-02", orders: 18, revenue: 31200, platformCut: 3120, myShare: 28080 },
  ];

  const [salesData, setSalesData] = useState(initialData);
  const [todaySales, setTodaySales] = useState(initialData[0].myShare);
  const [livePulse, setLivePulse] = useState(false);


  useEffect(() => {
    const salesAmounts = [999, 1499, 1999, 2499, 2999];

    const interval = setInterval(() => {
      const newSale = salesAmounts[Math.floor(Math.random() * salesAmounts.length)];
      const platformCut = Math.round(newSale * 0.10);
      const myShare = newSale - platformCut;

      setTodaySales(prev => prev + myShare);
      setLivePulse(true);


      setSalesData(prev => prev.map(row =>
        row.date === today
          ? {
            ...row,
            orders: row.orders + 1,
            revenue: row.revenue + newSale,
            platformCut: row.platformCut + platformCut,
            myShare: row.myShare + myShare
          }
          : row
      ));


      setTimeout(() => setLivePulse(false), 1000);
    }, Math.random() * 4000 + 3000);

    return () => clearInterval(interval);
  }, [today]);

  const monthlyEarnings = salesData.reduce((acc, row) => acc + row.myShare, 0);

  return (
    <div className="sales-dashboard min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 p-6">


      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-gray-800 mb-3">Sales Dashboard</h1>
        <p className="text-xl text-gray-600">Real-time earnings from your reseller portal</p>
      </div>


      <div className="fixed top-24 right-8 z-50">
        <div className={`bg-red-600 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 transition-all ${livePulse ? 'scale-110' : ''}`}>
          <div className="w-4 h-4 bg-white rounded-full animate-ping absolute -left-1"></div>
          <div className="w-4 h-4 bg-white rounded-full"></div>
          <span className="font-bold text-lg">LIVE SALES ACTIVE</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">

        <div className="cards-wrapper fade-in">


          <div className="earn-card today-card">
            <span className="card-label">TODAY</span>
            <h2>Today's Earnings</h2>

            <p className={`earn-value ${livePulse ? "pulse-up" : ""}`}>
              ₹{todaySales.toLocaleString("en-IN")}
            </p>

            <div className="sub-info">
              <FaArrowUp /> Live updates active
            </div>
          </div>

          <div className="earn-card month-card">
            <span className="card-label-green">MONTH</span>
            <h2>This Month Earnings</h2>

            <p className="earn-value">
              ₹{monthlyEarnings.toLocaleString("en-IN")}
            </p>

            <div className="sub-info-green">
              Keep growing.
            </div>
          </div>

        </div>
      </div>

 
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
          <h3 className="text-2xl font-bold">Daily Sales Overview</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b-2">
              <tr>
                <th className="px-6 py-4 text-left">Date</th>
                <th className="px-6 py-4 text-left">Orders</th>
                <th className="px-6 py-4 text-left">Total Revenue</th>
                <th className="px-6 py-4 text-left">Platform Cut (10%)</th>
                <th className="px-6 py-4 text-left font-bold text-green-600">Your Share</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map((row, idx) => (
                <tr
                  key={idx}
                  className={`border-b hover:bg-purple-50 transition ${row.date === today ? "bg-purple-50 font-bold" : ""}`}
                >
                  <td className="px-6 py-5">
                    {row.date === today ? "Today" : row.date}
                    {row.date === today && <span className="ml-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">LIVE</span>}
                  </td>
                  <td className="px-6 py-5">{row.orders}</td>
                  <td className="px-6 py-5">₹{row.revenue.toLocaleString("en-IN")}</td>
                  <td className="px-6 py-5 text-red-600">-₹{row.platformCut.toLocaleString("en-IN")}</td>
                  <td className="px-6 py-5 text-green-600 font-bold">₹{row.myShare.toLocaleString("en-IN")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
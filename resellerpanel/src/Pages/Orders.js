
import React, { useState } from "react";
import "../assets/css/Orders.css";
import { FaSearch, FaEye, FaRupeeSign, FaCalendarAlt, FaUser, FaBookOpen, FaFilter } from "react-icons/fa";
import EnrollmentDetailsModal from "./Enrollmentpage";

export default function RecentOrders() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [filterStatus, setFilterStatus] = useState("all");

  const orders = [
    {
      id: 101,
      studentName: "Amit Sharma",
      email: "amit.sharma@gmail.com",
      course: "ChatGPT for Marketing Mastery",
      amount: 2499,
      date: "05 Dec 2025",
      time: "2:34 PM",
      status: "completed",
      progress: 78,
      lastActive: "2 hours ago"
    },
    {
      id: 102,
      studentName: "Priya Singh",
      email: "priya99@gmail.com",
      course: "YouTube Ads Pro 2025",
      amount: 2999,
      date: "04 Dec 2025",
      time: "11:18 AM",
      status: "completed",
      progress: 45,
      lastActive: "Yesterday"
    },
    {
      id: 103,
      studentName: "Rahul Verma",
      email: "rahul.v@gmail.com",
      course: "Facebook Ads Analytics",
      amount: 1999,
      date: "03 Dec 2025",
      time: "6:52 PM",
      status: "completed",
      progress: 100,
      lastActive: "3 days ago"
    },
    {
      id: 104,
      studentName: "Neha Kapoor",
      email: "neha.kapoor@outlook.com",
      course: "Digital Marketing Mastery",
      amount: 3499,
      date: "02 Dec 2025",
      time: "9:15 AM",
      status: "completed",
      progress: 92,
      lastActive: "5 hours ago"
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = 
      order.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.course.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilter = filterStatus === "all" || order.status === filterStatus;
    
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="recent-orders-page">
 
      <div className="page-header">
        <div>
          <h1>Recent Orders</h1>
          <p>All paid enrollments from your branded portal</p>
        </div>
        <div className="stats-badge">
          <span className="total-orders">{orders.length} Orders</span>
          <span className="total-revenue">
            ₹{orders.reduce((sum, o) => sum + o.amount, 0).toLocaleString("en-IN")}
          </span>
        </div>
      </div>

     
      <div className="controls-bar">
        <div className="search-box">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search by name, email or course..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="filter-group">
          <button className={`filter-btn ${filterStatus === "all" ? "active" : ""}`} 
                  onClick={() => setFilterStatus("all")}>
            <FaFilter /> All
          </button>
          <button className={`filter-btn ${filterStatus === "completed" ? "active" : ""}`}
                  onClick={() => setFilterStatus("completed")}>
            Completed
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Student</th>
              <th>Email</th>
              <th>Course Purchased</th>
              <th>Amount</th>
              <th>Date & Time</th>
              <th>Progress</th>
              <th>Last Active</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan="8" className="no-data">No orders found</td>
              </tr>
            ) : (
              filteredOrders.map((order) => (
                <tr key={order.id} className="order-row">
                  <td>
                    <div className="student-info">
                      <FaUser className="user-icon" />
                      <div>
                        <strong>{order.studentName}</strong>
                      </div>
                    </div>
                  </td>
                  <td className="email">{order.email}</td>
                  <td className="course-name">
                    <FaBookOpen className="course-icon" />
                    {order.course}
                  </td>
                  <td className="amount">
                    <FaRupeeSign />
                    {order.amount.toLocaleString("en-IN")}
                  </td>
                  <td>
                    <div className="date-time">
                      <FaCalendarAlt className="cal-icon" />
                      <div>
                        <div>{order.date}</div>
                        <small>{order.time}</small>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="progress-cell">
                      <div className="progress-bar-bg">
                        <div 
                          className="progress-fill" 
                          style={{ width: `${order.progress}%` }}
                        ></div>
                      </div>
                      <span className="progress-text">{order.progress}%</span>
                    </div>
                  </td>
                  <td className="last-active">{order.lastActive}</td>
                  <td>
                    <button 
                      className="view-details-btn"
                      onClick={() => setSelectedOrder(order)}
                    >
                      <FaEye /> View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

{selectedOrder && (
  <EnrollmentDetailsModal
    order={selectedOrder}
    onClose={() => setSelectedOrder(null)}
  />
)}

    
    </div>
  );
}
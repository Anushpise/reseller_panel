import React, { useState } from "react";
import EnrollmentDetails from "./Enrollmentpage";
import "./Orders.css";

export default function RecentOrders() {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orders = [
    {
      id: 1,
      name: "Amit Sharma",
      email: "amit123@gmail.com",
      course: "Full Stack Web Development",
      amount: 4999,
      date: "2025-12-01",
      progress: 60,
      modulesCompleted: 6,
      lastLogin: "2025-12-03"
    },
    {
      id: 2,
      name: "Riya Patel",
      email: "riya.patel@gmail.com",
      course: "Digital Marketing Mastery",
      amount: 2999,
      date: "2025-11-30",
      progress: 82,
      modulesCompleted: 9,
      lastLogin: "2025-12-02"
    }
  ];

  return (
    <div className="orders-wrapper">
      <h1>Recent Orders</h1>

      <table className="orders-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Email</th>
            <th>Course Purchased</th>
            <th>Amount Paid</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.name}</td>
              <td>{order.email}</td>
              <td>{order.course}</td>
              <td>₹{order.amount}</td>
              <td>{order.date}</td>
              <td>
                <button
                  className="view-btn"
                  onClick={() => setSelectedOrder(order)}
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <EnrollmentDetails
          order={selectedOrder}
          close={() => setSelectedOrder(null)}
        />
      )}
    </div>
  );
}

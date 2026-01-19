import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { resellerLogout } from "../Store/ResellerSlice";

import { FaSignOutAlt, FaBell } from "react-icons/fa";
import Notifications from "../Pages/Notification";
import "../assets/css/Navbar.css";

export default function Navbar() {
  const { reseller } = useSelector((state) => state.reseller || {});
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false);

  const handleLogout = () => dispatch(resellerLogout());

  const getInitials = (name) => {
    if (!name) return "";
    const p = name.trim().split(" ");
    return p.length === 1
      ? p[0][0].toUpperCase()
      : (p[0][0] + p[1][0]).toUpperCase();
  }; const menuItems = [
  {
    title: "Dashboard",
    children: [
      { name: "Today Sales", link: "/" },
      { name: "Monthly Overview", link: "/dashboard/monthly" }
    ]
  },
  {
    title: "Onboarding",
    children: [
      { name: "Reseller Signup", link: "/register" },
      { name: "Subscription Plan", link: "/onboarding/subscription" },
      { name: "Make Payment", link: "/onboarding/payment" },
      { name: "Activation Success", link: "/onboarding/activation" }
    ]
  },
  {
    title: "Catalog",
    children: [
      { name: "All Courses", link: "/courses" },
      { name: "Course Preview", link: "/courses/preview" },
      { name: "Set Selling Price", link: "/courses/price" },
      { name: "Demo Portal", link: "/demo" }
    ]
  },
  {
    title: "Branding",
    children: [
      { name: "Logo & Theme", link: "/branding" },
      { name: "Invoice Settings", link: "/branding/invoice-config" }
    ]
  },
  {
    title: "Access",
    children: [
      { name: "My Learning (Free)", link: "/access/my-learning" },
      { name: "Demo Control Panel", link: "/access/demo-control" }
    ]
  },
  {
    title: "Finance",
    children: [
      { name: "Earnings Overview", link: "/finance/earnings" },
      { name: "Billing & Invoices", link: "/finance/billing" },
      { name: "Monthly Statement", link: "/finance/statement" }
    ]
  },
  {
    title: "Orders",
    children: [
      { name: "All Orders", link: "/orders" },
    
    ]
  },
 
  {
    title: "Settings",
    children: [
      { name: "Profile", link: "/settings/profile" },
      { name: "Security", link: "/settings/security" }
    ]
  }
];


  const notifications = [
  { type: "sale", message: "You made a new course sale!", time: "2 min ago", unread: true },
  { type: "payout", message: "Your payout has been processed!", time: "1 hr ago" },
  { type: "course", message: "A learner completed your course!", time: "Yesterday" },
  { type: "renewal", message: "Your subscription renews soon.", time: "2 days ago" }
];


  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    setOpenMenu(null);
  };

  return (
    <div className="navbar-wrapper">
      <div className="container navContainer">
        <div className="logo">
          <h2>40+ Online Courses</h2>
          <p className="sub">VWX B2B (OPC) PVT LTD</p>
        </div>

        <nav>
          <ul className="nav-links">

            {menuItems.map((item, index) => (
              <li
                key={index}
                className="menu-item"
                onMouseEnter={() => setOpenMenu(index)}
                onMouseLeave={() => setOpenMenu(null)}
                onClick={() => setOpenMenu(openMenu === index ? null : index)}
              >
                <span>{item.title}</span>

                <div className={`mega-menu ${openMenu === index ? "show" : ""}`}>
                  {item.children.map((child, idx) => (
                    <NavLink
                      key={idx}
                      to={child.link}
                      onClick={() => setOpenMenu(null)}
                      className="mega-link"
                    >
                      {child.name}
                    </NavLink>
                  ))}
                </div>
              </li>
            ))}

            <li className="notification-icon" onClick={toggleNotifications}>
              <FaBell size={20} />
              <span className="notif-dot"></span>

              {showNotifications && (
                <div className="notif-dropdown">
                  <Notifications notifications={notifications} />
                </div>
              )}
            </li>

            {!reseller ? (
              <>
                <li><NavLink to="/login">Login</NavLink></li>
                <li><NavLink to="/register">Register</NavLink></li>
              </>
            ) : (
              <>
                <li className="user-box">
                  {reseller.image ? (
                    <img src={reseller.image} alt="pfp" className="pfp" />
                  ) : (
                    <div className="pfp initials">{getInitials(reseller.name)}</div>
                  )}
                  <span className="username">{reseller.name}</span>
                </li>

                <li onClick={handleLogout} className="logout-btn">
                  <FaSignOutAlt size={20} />
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}

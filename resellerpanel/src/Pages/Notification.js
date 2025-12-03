import React from "react";
import { FaDollarSign, FaBell, FaBookOpen, FaSyncAlt } from "react-icons/fa";
import "./Notifications.css";

export default function Notifications({ notifications = [] }) {
  
  const getIcon = (type) => {
    switch (type) {
      case "sale":
        return <FaDollarSign className="icon sale" />;
      case "payout":
        return <FaSyncAlt className="icon payout" />;
      case "renewal":
        return <FaBell className="icon renewal" />;
      case "course":
        return <FaBookOpen className="icon course" />;
      default:
        return <FaBell className="icon default" />;
    }
  };

  return (
    <div className="notifications-card">
      <h2>Notifications</h2>

      {notifications.length === 0 ? (
        <p className="no-notifications">No new notifications </p>
      ) : (
        <ul>
          {notifications.map((note, idx) => (
            <li key={idx} className={note.unread ? "notification unread" : "notification"}>
              
              <div className="left-bar"></div>

              <div className="noti-content">
                {getIcon(note.type)}
                <div className="text-block">
                  <p className="message">{note.message}</p>
                  <span className="time">{note.time}</span>
                </div>
              </div>

              {note.unread && <span className="unread-dot"></span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

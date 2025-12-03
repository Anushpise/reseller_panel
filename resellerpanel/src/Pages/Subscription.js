import React from "react";
import { useSelector } from "react-redux";
import { FaCheckCircle, FaClock, FaCreditCard, FaTimesCircle } from "react-icons/fa";
import "./Subscription.css";

export default function SubscriptionPage() {
  const { reseller, subscriptionActive } = useSelector((state) => state.reseller || {});

  if (!reseller) {
    return (
      <div className="subscription-wrapper">
        <h1>Please login to view your subscription</h1>
      </div>
    );
  }

  const subscription = {
    status: subscriptionActive ? "Active" : "Pending Payment",
    renewalDate: reseller.subscription?.endDate ? new Date(reseller.subscription.endDate).toLocaleDateString() : "N/A",
    plan: reseller.subscription?.plan || "Basic Plan",
    amount: reseller.subscription?.amount || 0,
    autoRenew: reseller.subscription?.autoRenew || false,
    lastPaid: reseller.subscription?.startDate ? new Date(reseller.subscription.startDate).toLocaleDateString() : "N/A",
  };

  const handlePayment = () => {
    alert("Redirecting to payment gateway… 💳");
 
  };

  const getStatusIcon = () => {
    if (subscription.status === "Active")
      return <><FaCheckCircle className="active-icon" /> Active</>;

    if (subscription.status === "Pending Payment")
      return <><FaClock className="due-icon" /> Pending Payment</>;

    return <><FaTimesCircle className="expired-icon" /> Expired</>;
  };

  return (
    <div className="subscription-wrapper">
      <h1>Subscription & Renewal</h1>
      <div className="sub-card">
        <div className="sub-header">
          <div>
            <h2>{subscription.plan}</h2>
            <p className="mini-text">Full access to all premium features</p>
          </div>
          <span className={`status-badge ${subscription.status.toLowerCase().replace(" ", "-")}`}>
            {getStatusIcon()}
          </span>
        </div>

        <div className="sub-details">
          <p><strong>Current Status:</strong> {subscription.status}</p>
          <p><strong>Renewal Date:</strong> {subscription.renewalDate}</p>
          <p><strong>Last Payment:</strong> {subscription.lastPaid}</p>
          <p><strong>Subscription Fee:</strong> ₹{subscription.amount}</p>

          <p>
            <strong>Auto Renew:</strong>{" "}
            <span className={`auto-tag ${subscription.autoRenew ? "on" : "off"}`}>
              {subscription.autoRenew ? "Enabled" : "Disabled"}
            </span>
          </p>
        </div>

        {!subscriptionActive && (
          <button className="renew-btn" onClick={handlePayment}>
            <FaCreditCard /> Pay Annual Fee
          </button>
        )}
      </div>
    </div>
  );
}

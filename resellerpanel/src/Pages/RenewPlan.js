import React from "react";
import "./RenewPlan.css";

const RenewPlan = () => {
  const plan = {
    currentPlan: "Pro Annual Plan",
    expiry: "28 Dec 2025",
    price: "₹3800 / Year",

    plans: [
      {
        name: "Basic Annual Plan",
        price: "₹2200 / Year",
        features: ["Dashboard", "Limited Students", "Email Support"],
      },
      {
        name: "Pro Annual Plan",
        price: "₹3800 / Year",
        features: [
          "Unlimited Students",
          "Custom Branding",
          "Unlimited Sales",
          "24/7 Support",
        ],
        popular: true,
      },
      {
        name: "Premium Annual Plan",
        price: "₹5200 / Year",
        features: [
          "Everything in Pro",
          "White-Label App",
          "Priority Support",
        ],
      },
    ],
  };

  return (
    <div className="renew-wrapper">
      {/* HEADER */}
      <div className="renew-header">
        <h2>Renew / Upgrade Subscription</h2>
        <p>Choose the best plan that fits your business</p>
      </div>

      {/* CURRENT PLAN BOX */}
      <div className="current-plan-box">
        <h3>Current Plan: {plan.currentPlan}</h3>
        <p>
          <strong>Expiry:</strong> {plan.expiry}
        </p>
        <p className="current-price">{plan.price}</p>
      </div>

      {/* AVAILABLE PLANS */}
      <h3 className="section-title">Available Plans</h3>
      <div className="plans-grid">
        {plan.plans.map((p, i) => (
          <div className={`plan-card-renew ${p.popular ? "popular" : ""}`} key={i}>
            {p.popular && <span className="popular-tag">Most Popular</span>}

            <h4>{p.name}</h4>
            <p className="plan-price-renew">{p.price}</p>

            <ul>
              {p.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            <button className="choose-btn">Choose Plan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenewPlan;

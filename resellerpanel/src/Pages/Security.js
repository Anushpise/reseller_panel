import React, { useState } from "react";
import { changePasswordAPI } from "../api/Resellerapi";
import "./Settings.css";

export default function SecuritySettings() {
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const updateForm = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handlePasswordChange = async () => {
    if (form.newPassword !== form.confirmPassword) {
      return alert("New passwords do not match!");
    }

    try {
      await changePasswordAPI(form);
      alert("Password updated successfully 🔐");
    } catch (e) {
      alert("Failed to change password");
    }
  };

  return (
    <div className="settings-wrapper">
      <h1>Security</h1>

      <div className="settings-form">
        <label>Current Password</label>
        <input
          type="password"
          name="oldPassword"
          onChange={updateForm}
          value={form.oldPassword}
        />

        <label>New Password</label>
        <input
          type="password"
          name="newPassword"
          onChange={updateForm}
          value={form.newPassword}
        />

        <label>Confirm New Password</label>
        <input
          type="password"
          name="confirmPassword"
          onChange={updateForm}
          value={form.confirmPassword}
        />

        <button className="save-btn" onClick={handlePasswordChange}>
          Update Password
        </button>
      </div>
    </div>
  );
}

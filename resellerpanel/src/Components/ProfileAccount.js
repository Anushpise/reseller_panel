import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileAPI } from "../api/Resellerapi";
import { resellerLogin } from "../Store/ResellerSlice";
import "../Pages/Settings.css";

export default function ProfileSettings() {
  const dispatch = useDispatch();
  const { reseller } = useSelector((state) => state.reseller);

  const [form, setForm] = useState({
    name: reseller?.name || "",
    phone: reseller?.phone || "",
    address: reseller?.address || "",
    businessName: reseller?.businessName || "",
    businessCategory: reseller?.businessCategory || "",
  });

  const updateForm = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSave = async () => {
    try {
      const res = await updateProfileAPI(form);
      dispatch(resellerLogin({ reseller: res.data.reseller }));
      alert("Profile updated successfully ✨");
    } catch (e) {
      alert("Update failed, try again!");
    }
  };

  return (
    <div className="settings-wrapper">
      <h1>Profile Settings</h1>

      <div className="settings-form">
        <label>Name</label>
        <input name="name" value={form.name} onChange={updateForm} />

        <label>Phone</label>
        <input name="phone" value={form.phone} onChange={updateForm} />

        <label>Address</label>
        <input name="address" value={form.address} onChange={updateForm} />

        <label>Business Name</label>
        <input name="businessName" value={form.businessName} onChange={updateForm} />

        <label>Business Category</label>
        <input name="businessCategory" value={form.businessCategory} onChange={updateForm} />

        <button className="save-btn" onClick={handleSave}>Save Changes</button>
      </div>
    </div>
  );
}

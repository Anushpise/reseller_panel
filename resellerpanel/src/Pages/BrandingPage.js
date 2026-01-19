
import React, { useState } from "react";
import "../assets/css/Branding.css";
import toast from "react-hot-toast";
import axios from "axios";
export default function BrandingSettings() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, checked, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : files ? files[0] : value,
    }));
  };

  const handleSave = async () => {
  try {
    setLoading(true);
    const token = localStorage.getItem("token");

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });

    const res = await axios.put(
      "/api/reseller/branding",
      formData,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      }
    );

    toast.success("Branding updated! Your portal is now white-labeled 🎉");
  } catch (err) {
    toast.error("Failed to save branding");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="branding-wrapper">
      <div className="header">
        <h1>White Label Branding Settings</h1>
        <p>Customize your entire reseller dashboard, client portal & invoices with your brand identity</p>
      </div>

      <section>
        <h2>Company Information</h2>
        <div className="grid">
          <input className="input" name="companyName" placeholder="Company Name" onChange={handleChange} />
          <input className="input" name="legalName" placeholder="Legal Business Name" onChange={handleChange} />
          <select className="input" name="businessType" onChange={handleChange}>
            <option value="">Business Type</option>
            <option>Proprietor</option>
            <option>OPC</option>
            <option>Pvt Ltd</option>
            <option>LLP</option>
            <option>Partnership</option>
          </select>
          <input className="input" name="tagline" placeholder="Tagline / Slogan" onChange={handleChange} />
          <textarea className="input col-span-2" name="about" placeholder="Short About Company" rows={4} onChange={handleChange} />
          <input className="input" name="email" placeholder="Contact Email" onChange={handleChange} />
          <input className="input" name="phone" placeholder="Phone / WhatsApp" onChange={handleChange} />
          <input className="input" name="website" placeholder="Website URL" onChange={handleChange} />
          <input className="input" name="supportEmail" placeholder="Support Email" onChange={handleChange} />
        </div>
      </section>

      <section>
        <h2>Logo & Theme Colors</h2>
        <div className="grid">
          <div>
            <label className="label">Main Logo (Recommended: 300×100px)</label>
            <input type="file" className="input file-input" name="logo" accept="image/*" onChange={handleChange} />
          </div>
          <div>
            <label className="label">Favicon (32×32px)</label>
            <input type="file" className="input file-input" name="favicon" accept=".ico,.png" onChange={handleChange} />
          </div>
          <div>
            <label className="label">Square Logo (for invoices)</label>
            <input type="file" className="input file-input" name="squareLogo" accept="image/*" onChange={handleChange} />
          </div>

          <div>
            <label className="label">Primary Color</label>
            <input type="color" name="primaryColor" className="color-picker" onChange={handleChange} defaultValue="#6C63FF" />
          </div>
          <div>
            <label className="label">Secondary Color</label>
            <input type="color" name="secondaryColor" className="color-picker" onChange={handleChange} defaultValue="#64748b" />
          </div>
          <div>
            <label className="label">Accent / Button Color</label>
            <input type="color" name="accentColor" className="color-picker" onChange={handleChange} defaultValue="#10b981" />
          </div>

          <div className="col-span-2">
            <label className="label">Font Style</label>
            <select className="input" name="font" onChange={handleChange}>
              <option>Inter (Recommended)</option>
              <option>Poppins</option>
              <option>Roboto</option>
              <option>Montserrat</option>
              <option>Space Grotesk</option>
            </select>
          </div>
        </div>
      </section>

      <section>
        <h2>Business Address</h2>
        <div className="grid">
          <textarea className="input col-span-2" name="fullAddress" placeholder="Full Address" rows={3} onChange={handleChange} />
          <input className="input" name="city" placeholder="City" onChange={handleChange} />
          <input className="input" name="state" placeholder="State" onChange={handleChange} />
          <input className="input" name="pincode" placeholder="PIN Code" onChange={handleChange} />
          <input className="input" name="country" placeholder="Country" defaultValue="India" onChange={handleChange} />
        </div>
      </section>

      <section>
        <h2>Compliance & Tax Details</h2>
        <div className="grid">
          <input className="input" name="gstin" placeholder="GSTIN" onChange={handleChange} />
          <input className="input" name="pan" placeholder="PAN Number" onChange={handleChange} />
          <input className="input" name="cin" placeholder="CIN Number (Optional)" onChange={handleChange} />
          <input className="input" name="billingName" placeholder="Billing Name" onChange={handleChange} />
          <textarea className="input col-span-2" name="registeredAddress" placeholder="Registered Address (if different)" rows={3} onChange={handleChange} />
        </div>
      </section>

     

      <section>
        <h2>Social Media Links</h2>
        <div className="grid">
          <input className="input" name="instagram" placeholder="Instagram URL" onChange={handleChange} />
          <input className="input" name="facebook" placeholder="Facebook URL" onChange={handleChange} />
          <input className="input" name="linkedIn" placeholder="LinkedIn URL" onChange={handleChange} />
          <input className="input" name="youtube" placeholder="YouTube URL" onChange={handleChange} />
        </div>
      </section>

      <div className="text-center mt-12">
        <button onClick={handleSave} disabled={loading} className="save-btn">
          {loading ? "Saving Branding..." : "Save All Branding Settings"}
        </button>
      </div>
    </div>
  );
}
import React, { useState } from "react";
import toast from "react-hot-toast";
import "../assets/css/Branding.css"; 

export default function InvoiceSettings() {
  const [form, setForm] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : type === "checkbox" ? checked : value,
    }));
  };

  const handleSave = async () => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));

    toast.success("Invoice settings updated successfully!");
    setLoading(false);
  };

  return (
    <div className="branding-wrapper">
      <div className="header">
        <h1>Invoice Settings</h1>
        <p>Configure your billing, tax, bank info & invoice appearance</p>
      </div>

    
      <section>
        <h2>Invoice Information</h2>
        <div className="grid">
          <input
            className="input"
            name="invoicePrefix"
            placeholder="Invoice Prefix (e.g. BRAND-2025-)"
            onChange={handleChange}
          />

          <textarea
            className="input col-span-2"
            name="invoiceFooter"
            placeholder="Invoice Footer Text (e.g. Thank you for your business!)"
            rows={4}
            onChange={handleChange}
          />

          <div className="col-span-2 checkbox-row">
            <input
              type="checkbox"
              name="gstBreak"
              id="gstBreak"
              onChange={handleChange}
            />
            <label htmlFor="gstBreak" className="font-medium cursor-pointer">
              Show GST Breakdown on Invoices
            </label>
          </div>
        </div>
      </section>

   
      <section>
        <h2>Bank Details for Payments</h2>
        <div className="grid">
          <input
            className="input"
            name="accHolder"
            placeholder="Account Holder Name"
            onChange={handleChange}
          />
          <input
            className="input"
            name="bankName"
            placeholder="Bank Name"
            onChange={handleChange}
          />
          <input
            className="input"
            name="accNumber"
            placeholder="Account Number"
            onChange={handleChange}
          />
          <input
            className="input"
            name="ifsc"
            placeholder="IFSC Code"
            onChange={handleChange}
          />
          <input
            className="input"
            name="upi"
            placeholder="UPI ID (optional)"
            onChange={handleChange}
          />
        </div>
      </section>

   
      <section>
        <h2>Invoice Signature & Stamp</h2>
        <div className="grid">
          <div className="col-span-2">
            <label className="label">Digital Signature</label>
            <input
              type="file"
              className="input file-input"
              name="signature"
              accept="image/*"
              onChange={handleChange}
            />
          </div>

          <div className="col-span-2">
            <label className="label">Company Stamp (optional)</label>
            <input
              type="file"
              className="input file-input"
              name="stamp"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
        </div>
      </section>

     
      <div className="text-center mt-12">
        <button
          onClick={handleSave}
          disabled={loading}
          className="save-btn"
        >
          {loading ? "Saving Invoice Settings..." : "Save Invoice Settings"}
        </button>
      </div>
    </div>
  );
}

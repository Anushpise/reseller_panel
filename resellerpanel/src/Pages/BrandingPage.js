import React, { useState } from "react";
import "./Branding.css"
export default function BrandingSettings() {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const { name, files } = e.target;
    setForm((prev) => ({ ...prev, [name]: files[0] }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-10">
      <h1 className="text-3xl font-bold mb-6">Branding & Company Settings</h1>

      {/* ------------------ 1. COMPANY INFO ------------------ */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Company Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="companyName" placeholder="Company Name" onChange={handleChange} />
          <input className="input" name="legalName" placeholder="Legal Business Name" onChange={handleChange} />

          <select className="input" name="businessType" onChange={handleChange}>
            <option value="">Business Type</option>
            <option>Proprietor</option>
            <option>OPC</option>
            <option>Pvt Ltd</option>
            <option>LLP</option>
          </select>

          <input className="input" name="tagline" placeholder="Tagline / Slogan" onChange={handleChange} />
          <textarea className="input col-span-2" name="about" placeholder="Short About Company" onChange={handleChange} />

          <input className="input" name="email" placeholder="Contact Email" onChange={handleChange} />
          <input className="input" name="phone" placeholder="Phone / WhatsApp" onChange={handleChange} />

          <input className="input" name="website" placeholder="Website URL" onChange={handleChange} />
          <input className="input" name="supportEmail" placeholder="Support Email" onChange={handleChange} />
        </div>
      </section>

      {/* ------------------ 2. LOGO & BRANDING ------------------ */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Logo & Branding</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <input type="file" className="input" name="logo" onChange={handleFile} />
          <input type="file" className="input" name="favicon" onChange={handleFile} />
          <input type="file" className="input" name="squareLogo" onChange={handleFile} />

          <div>
            <label className="block mb-1 font-medium">Primary Color</label>
            <input type="color" name="primaryColor" className="h-10 w-20" onChange={handleChange} />
          </div>

          <div>
            <label className="block mb-1 font-medium">Secondary Color</label>
            <input type="color" name="secondaryColor" className="h-10 w-20" onChange={handleChange} />
          </div>

          <div className="col-span-2">
            <label className="block mb-1 font-medium">Accent / Button Color</label>
            <input type="color" name="accentColor" className="h-10 w-20" onChange={handleChange} />
          </div>

          <select className="input col-span-2" name="font" onChange={handleChange}>
            <option value="">Choose Font Style</option>
            <option>Poppins</option>
            <option>Inter</option>
            <option>Roboto</option>
            <option>Montserrat</option>
          </select>
        </div>
      </section>

      {/* ------------------ 3. ADDRESS DETAILS ------------------ */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Address Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <textarea className="input col-span-2" name="fullAddress" placeholder="Full Address" onChange={handleChange} />
          <input className="input" name="city" placeholder="City" onChange={handleChange} />
          <input className="input" name="state" placeholder="State" onChange={handleChange} />
          <input className="input" name="pincode" placeholder="PIN Code" onChange={handleChange} />
          <input className="input" name="country" placeholder="Country" onChange={handleChange} />
        </div>
      </section>

      {/* ------------------ 4. COMPLIANCE ------------------ */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Compliance Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="gstin" placeholder="GSTIN" onChange={handleChange} />
          <input className="input" name="pan" placeholder="PAN Number" onChange={handleChange} />
          <input className="input" name="cin" placeholder="CIN Number" onChange={handleChange} />
          <input className="input" name="billingName" placeholder="Billing Name" onChange={handleChange} />
          <textarea className="input col-span-2" name="registeredAddress" placeholder="Registered Address" onChange={handleChange} />
        </div>
      </section>

      {/* ------------------ 5. BANK DETAILS ------------------ */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Bank Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="accHolder" placeholder="Account Holder Name" onChange={handleChange} />
          <input className="input" name="bankName" placeholder="Bank Name" onChange={handleChange} />
          <input className="input" name="accNumber" placeholder="Account Number" onChange={handleChange} />
          <input className="input" name="ifsc" placeholder="IFSC" onChange={handleChange} />
          <input className="input" name="branch" placeholder="Branch" onChange={handleChange} />
          <input className="input" name="upi" placeholder="UPI ID" onChange={handleChange} />
        </div>
      </section>

      {/* ------------------ 6. INVOICE SETTINGS ------------------ */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Invoice Settings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="invoicePrefix" placeholder="Invoice Prefix (EX: VWX-RES-)" onChange={handleChange} />
          <textarea className="input col-span-2" name="invoiceFooter" placeholder="Invoice Footer Text" onChange={handleChange} />

          <label className="font-medium">Upload Signature</label>
          <input type="file" className="input" name="signature" onChange={handleFile} />

          <label className="font-medium">Upload Stamp</label>
          <input type="file" className="input" name="stamp" onChange={handleFile} />

          <div className="flex items-center gap-3 col-span-2 mt-2">
            <label className="font-medium">Show GST Breakdown</label>
            <input type="checkbox" name="gstBreak" onChange={(e)=>setForm(prev=>({...prev, gstBreak:e.target.checked}))} />
          </div>
        </div>
      </section>

      {/* ------------------ 7. SOCIAL MEDIA ------------------ */}
      <section className="bg-white p-6 rounded-2xl shadow">
        <h2 className="text-xl font-semibold mb-4">Social Media</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="input" name="instagram" placeholder="Instagram URL" onChange={handleChange} />
          <input className="input" name="facebook" placeholder="Facebook URL" onChange={handleChange} />
          <input className="input" name="linkedIn" placeholder="LinkedIn URL" onChange={handleChange} />
          <input className="input" name="youtube" placeholder="YouTube URL" onChange={handleChange} />
        </div>
      </section>

      <button className="px-6 py-3 bg-black text-white rounded-xl text-lg font-semibold hover:opacity-80 transition">
        Save Branding
      </button>
    </div>
  );
}


import React, { useRef, useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FaDownload, FaEnvelope, FaFileInvoice } from "react-icons/fa";
import "./Download.css";

/**
 * Simple sample sales data. Replace with API data as needed.
 */
const sampleSales = [
  {
    id: "INV-2025-001",
    studentName: "Amit Sharma",
    studentEmail: "amit123@gmail.com",
    course: "Full Stack Web Development",
    amount: 4999,
    gstPercent: 18,
    date: "2025-12-01",
    gstin: "27ABCDE1234F2Z5",
    reseller: {
      name: "VWX B2B (OPC) PVT LTD",
      gstin: "29VWXB2B0001Z1",
      address: "123 Business St, Mumbai, Maharashtra",
      logo: "https://via.placeholder.com/180x60?text=Your+Logo", // replace with real logo URL or local asset
      bank: {
        name: "Bank of India",
        acc: "XXXX-XXXX-1234",
        ifsc: "BKID0001234"
      }
    }
  },
  {
    id: "INV-2025-002",
    studentName: "Riya Patel",
    studentEmail: "riya.patel@gmail.com",
    course: "Digital Marketing Mastery",
    amount: 2999,
    gstPercent: 18,
    date: "2025-11-30",
    gstin: "27PQRST9876L1Z2",
    reseller: {
      name: "VWX B2B (OPC) PVT LTD",
      gstin: "29VWXB2B0001Z1",
      address: "123 Business St, Mumbai, Maharashtra",
      logo: "https://via.placeholder.com/180x60?text=Your+Logo",
      bank: {
        name: "Bank of India",
        acc: "XXXX-XXXX-1234",
        ifsc: "BKID0001234"
      }
    }
  }
];

export default function InvoiceDownload() {
  const [selectedSale, setSelectedSale] = useState(sampleSales[0]);
  const invoiceRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!selectedSale) {
    return <p>No sale selected.</p>;
  }

  const calcGst = (amount, percent) => {
    const gst = (amount * percent) / 100;
    const taxable = amount - gst; // if amount includes GST adjust accordingly; here we treat amount as base for simplicity
    return { gst, taxable };
  };

  const handleDownloadPDF = async () => {
    setIsGenerating(true);
    try {
      const input = invoiceRef.current;
      // html2canvas options to render CORS images (may require server config on external images)
      const canvas = await html2canvas(input, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`${selectedSale.id}.pdf`);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Unable to generate PDF. Check console for details.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleEmail = () => {
    // Simple mailto fallback. For real email, call backend / transactional email API.
    const subject = encodeURIComponent(`Invoice ${selectedSale.id}`);
    const body = encodeURIComponent(
      `Hi ${selectedSale.studentName},\n\nPlease find your invoice ${selectedSale.id} for ${selectedSale.course}.\n\nThanks,\n${selectedSale.reseller.name}`
    );
    window.location.href = `mailto:${selectedSale.studentEmail}?subject=${subject}&body=${body}`;
  };

  const { gst, taxable } = calcGst(selectedSale.amount, selectedSale.gstPercent);
  const total = selectedSale.amount + gst;

  return (
    <div className="invoice-download-page">
      <div className="top-row">
        <h1><FaFileInvoice /> Invoice & Receipts</h1>

        <div className="actions">
          <select
            value={selectedSale.id}
            onChange={(e) =>
              setSelectedSale(sampleSales.find((s) => s.id === e.target.value))
            }
          >
            {sampleSales.map((s) => (
              <option key={s.id} value={s.id}>
                {s.id} — {s.studentName} — {s.course}
              </option>
            ))}
          </select>

          <button className="btn" onClick={handleDownloadPDF} disabled={isGenerating}>
            <FaDownload /> {isGenerating ? "Generating..." : "Download PDF"}
          </button>

          <button className="btn outline" onClick={handleEmail}>
            <FaEnvelope /> Email Invoice
          </button>
        </div>
      </div>

      {/* Invoice preview (this DOM node gets rendered to canvas/pdf) */}
      <div className="invoice-preview" ref={invoiceRef}>
        <header className="inv-header">
          <div className="left">
            <img src={selectedSale.reseller.logo} alt="Reseller Logo" className="reseller-logo" />
            <div className="reseller-info">
              <h2>{selectedSale.reseller.name}</h2>
              <p>{selectedSale.reseller.address}</p>
              <p>GSTIN: <strong>{selectedSale.reseller.gstin}</strong></p>
            </div>
          </div>

          <div className="right">
            <h3>Tax Invoice</h3>
            <p><strong>Invoice:</strong> {selectedSale.id}</p>
            <p><strong>Date:</strong> {selectedSale.date}</p>
          </div>
        </header>

        <section className="inv-to">
          <div>
            <h4>Billed To</h4>
            <p><strong>{selectedSale.studentName}</strong></p>
            <p>{selectedSale.studentEmail}</p>
          </div>

          <div className="inv-billing">
            <p><strong>Course</strong>: {selectedSale.course}</p>
            <p><strong>Amount (excl. GST)</strong>: ₹{selectedSale.amount.toLocaleString()}</p>
            <p><strong>GST ({selectedSale.gstPercent}%)</strong>: ₹{gst.toLocaleString()}</p>
            <p className="inv-total"><strong>Total Payable</strong>: ₹{total.toLocaleString()}</p>
          </div>
        </section>

        <table className="inv-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Course</th>
              <th>Amount (₹)</th>
              <th>GST (₹)</th>
              <th>Total (₹)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>{selectedSale.course}</td>
              <td>{selectedSale.amount.toLocaleString()}</td>
              <td>{gst.toLocaleString()}</td>
              <td>{total.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>

        <footer className="inv-footer">
          <div>
            <p><strong>Bank Details</strong></p>
            <p>{selectedSale.reseller.bank.name} • A/C: {selectedSale.reseller.bank.acc} • IFSC: {selectedSale.reseller.bank.ifsc}</p>
          </div>
          <div>
            <p>For any queries email: <strong>support@vwxb2b.com</strong></p>
            <p>Note: This is a system generated invoice.</p>
          </div>
        </footer>
      </div>
    </div>
  );
}

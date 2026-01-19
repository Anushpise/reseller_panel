import React, { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Divider,
  Chip,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 

const PaymentPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const annualFee = 14999;
  const tax = 2700;
  const totalAmount = annualFee + tax;

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    setLoading(true);

    try {
      const { data } = await axios.post("/api/reseller/create-order", {
        amount: totalAmount * 100,
      });

      if (!data.orderId) throw new Error("Order creation failed");

      const sdkLoaded = await loadRazorpay();
      if (!sdkLoaded) {
        alert("Razorpay SDK failed to load. Please check your connection.");
        setLoading(false);
        return;
      }

      const email = localStorage.getItem("resellerEmail") || "";
      const phone = localStorage.getItem("resellerPhone") || "";

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY || "rzp_test_xxx",
        amount: totalAmount * 100,
        currency: "INR",
        name: "YourCompany Reseller Program",
        description: "Annual Reseller Subscription Fee",
        order_id: data.orderId,

        handler: async function (response) {
          try {
            const verifyRes = await axios.post("/api/reseller/verify-payment", {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
            });

            if (verifyRes.data.success) {
              localStorage.setItem("token", verifyRes.data.token);
              localStorage.setItem("isResellerActive", "true");

              navigate("/onboarding/success");
            }
          } catch (err) {
            alert("Payment verification failed. Contact support.");
          }
        },

        prefill: {
          email: email,
          contact: phone,
        },

        theme: { color: "#0056D2" },

        modal: {
          ondismiss: () => {
            setLoading(false);
            alert("Payment cancelled. Please complete the payment to activate your account.");
          },
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Payment initiation failed. Try again.");
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 8, mb: 10 }}>
      <Paper sx={{ width: { xs: "95%", sm: 500 }, p: 4, borderRadius: 3, boxShadow: 3 }}>
        
        <Typography variant="h4" fontWeight={700} textAlign="center" mb={1} color="#0056D2">
          Complete Your Onboarding
        </Typography>

        <Typography textAlign="center" color="text.secondary" mb={4}>
          Pay annual fee to activate your reseller account instantly
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Paper variant="outlined" sx={{ p: 3, backgroundColor: "#f8fbff" }}>
            <Typography variant="h6" fontWeight={600}>
              Reseller Pro Plan (Annual)
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
              <Typography variant="h4" fontWeight={700}>
                ₹{annualFee.toLocaleString("en-IN")}
              </Typography>
              <Typography color="text.secondary">/year</Typography>
              <Chip label="Best Value" color="primary" size="small" sx={{ ml: "auto" }} />
            </Box>

            <Divider sx={{ my: 2 }} />

            {["Unlimited client websites", "White-label dashboard", "Priority support", "Custom domain support"].map((item) => (
              <Typography key={item} variant="body2" color="success.main" fontWeight={600} sx={{ mt: 0.5 }}>
                ✓ {item}
              </Typography>
            ))}
          </Paper>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography fontWeight={600} mb={2}>Order Summary</Typography>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <span>Subscription Fee</span>
            <span>₹{annualFee.toLocaleString("en-IN")}</span>
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
            <span>GST (18%)</span>
            <span>₹{tax.toLocaleString("en-IN")}</span>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box sx={{ display: "flex", justifyContent: "space-between", fontSize: "1.25rem" }}>
            <Typography fontWeight={700}>Total</Typography>
            <Typography fontWeight={700} color="#0056D2">
              ₹{totalAmount.toLocaleString("en-IN")}
            </Typography>
          </Box>
        </Box>

        <Alert severity="info" sx={{ mb: 3 }}>
          Your account will be <strong>automatically activated</strong> in seconds after payment.
        </Alert>

        <Button
          fullWidth
          variant="contained"
          size="large"
          sx={{ mt: 2, py: 1.8, background: "#0056D2", fontSize: "1.15rem" }}
          onClick={handlePayment}
          disabled={loading}
        >
          {loading ? <CircularProgress size={28} color="inherit" /> : `Pay ₹${totalAmount.toLocaleString("en-IN")} & Activate`}
        </Button>

        <Typography textAlign="center" mt={3} color="text.secondary" fontSize="0.9rem">
          Secured by Razorpay • 256-bit SSL • Instant Activation
        </Typography>
      </Paper>
    </Box>
  );
};

export default PaymentPage;

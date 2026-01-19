
import React, { useEffect, useState } from "react";
import { Box, Paper, Typography, Button, CircularProgress,  } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import axios from "axios";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const SuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activating, setActivating] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const verifyAndActivate = async () => {
      const params = new URLSearchParams(location.search);
      const paymentId = params.get("razorpay_payment_id");
      const orderId = params.get("razorpay_order_id");
      const signature = params.get("razorpay_signature");

      if (!paymentId || !orderId || !signature) {
        setError(true);
        setActivating(false);
        return;
      }

      try {
       
        const res = await axios.post("/api/reseller/verify-and-activate", {
          razorpay_payment_id: paymentId,
          razorpay_order_id: orderId,
          razorpay_signature: signature,
        });

        if (res.data.success) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("isResellerActive", "true");

          setTimeout(() => {
            setActivating(false);
            setTimeout(() => navigate("/dashboard", { replace: true }), 3000);
          }, 2000);
        }
      } catch (err) {
        console.error(err);
        setError(true);
        setActivating(false);
      }
    };

    verifyAndActivate();
  }, [location, navigate]);

  return (
    <>
      <Confetti width={window.innerWidth} height={window.innerHeight} recycle={false} numberOfPieces={500} />

      <Box sx={{ display: "flex", justifyContent: "center", minHeight: "100vh", alignItems: "center", background: "linear-gradient(135deg, #f5f7ff, #e0e8ff)" }}>
        <Paper sx={{ width: 480, p: 6, textAlign: "center", borderRadius: 4, boxShadow: 10 }}>
          {activating ? (
            <>
              <CircularProgress size={70} thickness={5} color="primary" sx={{ mb: 4 }} />
              <Typography variant="h5" fontWeight={700}>Activating Your Reseller Account...</Typography>
              <Typography color="text.secondary" mt={2}>Please wait while we set everything up for you</Typography>
            </>
          ) : error ? (
            <>
              <CheckCircleOutlineIcon sx={{ fontSize: 80, color: "#d32f2f", mb: 3 }} />
              <Typography variant="h5" fontWeight={700} color="error">Payment Verification Failed</Typography>
              <Typography mt={2}>Contact support or try again.</Typography>
              <Button variant="contained" sx={{ mt: 3 }} onClick={() => navigate("/onboarding/payment")}>
                Try Again
              </Button>
            </>
          ) : (
            <>
             <CheckCircleOutlineIcon style={{ fontSize: 60, color: "green" }} />

              <Typography variant="h4" fontWeight={700} color="#0056D2">
                Welcome to the Reseller Program!
              </Typography>
              <Typography variant="h6" mt={2} color="success.main">
                Your account is now ACTIVE
              </Typography>
              <Typography mt={2} color="text.secondary">
                You can now access your white-label dashboard, add clients, and start earning.
              </Typography>

              <Button
                variant="contained"
                size="large"
                sx={{ mt: 5, py: 1.8, px: 6, fontSize: "1.1rem", background: "#0056D2" }}
                onClick={() => navigate("/dashboard")}
              >
                Go to Dashboard →
              </Button>

              <Typography mt={4} color="text.secondary" fontSize="0.9rem">
                Annual subscription will auto-renew on {new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toDateString()}
              </Typography>
            </>
          )}
        </Paper>
      </Box>
    </>
  );
};

export default SuccessPage;
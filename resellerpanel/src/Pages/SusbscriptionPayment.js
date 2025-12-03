import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SubscriptionPayment = () => {
  const navigate = useNavigate();

  const handlePayment = () => {
    
    navigate("/onboarding/activation");
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
      <Paper sx={{ width: 450, p: 4, borderRadius: 3, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700}>
          Annual Subscription
        </Typography>

        <Typography mt={2}>Join as a Premium Reseller</Typography>
        <Typography fontSize={30} mt={1} fontWeight={600}>
          ₹ 1499 / year
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 4, py: 1.5, fontSize: 18 }}
          onClick={handlePayment}
        >
          Pay Now
        </Button>
      </Paper>
    </Box>
  );
};

export default SubscriptionPayment;

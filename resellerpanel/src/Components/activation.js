import React from "react";
import { Box, Paper, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ActivationSuccess = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 12 }}>
      <Paper sx={{ width: 450, p: 4, textAlign: "center" }}>
        <Typography variant="h4" fontWeight={700}>
          Account Activated 🎉
        </Typography>

        <Typography mt={2}>
          Your reseller account is now active. You can login and start selling.
        </Typography>

        <Button
          variant="contained"
          fullWidth
          sx={{ mt: 3 }}
          onClick={() => navigate("/login")}
        >
          Go to Login
        </Button>
      </Paper>
    </Box>
  );
};

export default ActivationSuccess;

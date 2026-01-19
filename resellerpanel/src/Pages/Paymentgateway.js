import React, { useState } from "react";
import { Box, Button } from "@mui/material";

const PaymentGateway = ({ setPlanActive }) => {
  const handleSetup = () => {
   
    console.log("Payment Gateway Setup Done");
    setPlanActive(true); 
  };

  return (
    <Box>
      <Button variant="contained" onClick={handleSetup}>Setup Payment Gateway</Button>
    </Box>
  );
};

export default PaymentGateway;

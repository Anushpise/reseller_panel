import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { registerReseller } from "../api/Resellerapi";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    password: "",
    domain: "" 
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleRegister = async () => {
    if (!form.name || !form.businessName || !form.email || !form.password) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);
    try {
      await registerReseller({
        ownerName: form.name.trim(),
        businessName: form.businessName.trim(),
        email: form.email.toLowerCase().trim(),
        phone: form.phone,
        password: form.password,
        domain: form.domain?.trim() 
      });

      alert("Registration Successful! Redirecting to payment...");
      navigate("/onboarding/payment");

    } catch (err) {
      alert(err.response?.data?.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 12 }}>
      <Paper sx={{ width: 420, p: 4, borderRadius: 3 }}>
        <Typography variant="h4" fontWeight={700} textAlign="center" mb={3}>
          Reseller Sign Up
        </Typography>

        <TextField label="Full Name (Owner)" name="name" fullWidth margin="normal" value={form.name} onChange={handleChange} required />
        <TextField label="Business Name" name="businessName" fullWidth margin="normal" value={form.businessName} onChange={handleChange} required />
        <TextField label="Email Address" name="email" type="email" fullWidth margin="normal" value={form.email} onChange={handleChange} required />
        <TextField label="Phone Number" name="phone" fullWidth margin="normal" value={form.phone} onChange={handleChange} />
        <TextField label="Password" type="password" name="password" fullWidth margin="normal" value={form.password} onChange={handleChange} required />
        <TextField label="Domain (optional)" name="domain" fullWidth margin="normal" value={form.domain} onChange={handleChange} />

        <Button
          fullWidth
          variant="contained"
          sx={{ mt: 3, background: "#0056D2", py: 1.5 }}
          onClick={handleRegister}
          disabled={loading}
        >
          {loading ? <CircularProgress size={24} color="inherit" /> : "Continue to Payment"}
        </Button>

        <Typography textAlign="center" mt={2}>
          Already have an account?{" "}
          <span onClick={() => navigate("/login")} style={{ color: "#0056D2", cursor: "pointer", fontWeight: 600 }}>
            Login
          </span>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Register;

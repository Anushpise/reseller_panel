import React, { useState } from "react";
import {
  Box,
  Card,
  Tabs,
  Tab,
  TextField,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import "./Settings.css"
export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box>
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 3 }}>
        Settings
      </Typography>

      <Card sx={{ p: 3 }}>
        <Tabs
          value={activeTab}
          onChange={(e, v) => setActiveTab(v)}
          sx={{ mb: 2 }}
        >
          <Tab label="General Settings" />
          <Tab label="Payment Settings" />
        </Tabs>

        {/* GENERAL SETTINGS */}
        {activeTab === 0 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Profile Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="Full Name" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="Email" />
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              Company Information
            </Typography>

            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="Company Name" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="Business Phone" />
              </Grid>
              <Grid item xs={12}>
                <TextField fullWidth label="Company Address" multiline rows={3} />
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              Change Password
            </Typography>

            <Grid container spacing={2}>
              <Grid item md={4} xs={12}>
                <TextField type="password" fullWidth label="Old Password" />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField type="password" fullWidth label="New Password" />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField type="password" fullWidth label="Confirm Password" />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{ mt: 3, bgcolor: "#1976D2" }}
            >
              Save Changes
            </Button>
          </Box>
        )}

        {/* PAYMENT SETTINGS */}
        {activeTab === 1 && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
              Razorpay Configuration
            </Typography>

            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="Razorpay Key ID" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="Razorpay Secret" />
              </Grid>
            </Grid>

            <Typography variant="h6" sx={{ mt: 4, mb: 2, fontWeight: 600 }}>
              GST / Billing Details
            </Typography>

            <Grid container spacing={2}>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="GST Number" />
              </Grid>
              <Grid item md={6} xs={12}>
                <TextField fullWidth label="PAN Number" />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Billing Address"
                  multiline
                  rows={3}
                />
              </Grid>
            </Grid>

            <Button
              variant="contained"
              sx={{ mt: 3, bgcolor: "#1976D2" }}
            >
              Save Payment Settings
            </Button>
          </Box>
        )}
      </Card>
    </Box>
  );
}

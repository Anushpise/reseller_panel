import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Login from "./Pages/Login";
import Register from "./Pages/Register";

import SalesDashboard from "./Pages/SalesDashboard";
import TransactionHistory from "./Pages/TransactionHistory";
import MonthlyStatement from "./Pages/MonthlyStatement";

import CompanySettings from "./Pages/BrandingPage";

import AvailableCourses from "./Pages/AvailableCourse";
import CoursePreview from "./Pages/coursepreview";
import SetPrice from "./Pages/SetPrice";

import RecentOrders from "./Pages/Orders";
import EnrollmentPage from "./Pages/Enrollmentpage";

import Invoice from "./Pages/Invoice";
import InvoiceDownload from "./Pages/Download";

import MyCourses from "./Pages/MyCourse";
import Certificates from "./Pages/Certificate";

import Notifications from "./Pages/Notification";
import SubscriptionPage from "./Pages/Subscription";
import SubscriptionPayment from "./Pages/SusbscriptionPayment";
import ActivationSuccess from "./Components/activation";
import ProfileSettings from "./Components/ProfileAccount";
import SecuritySettings from "./Pages/Security";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route path="/home" element={<SalesDashboard />} />
        <Route path="/home/earnings" element={<SalesDashboard />} />
        <Route path="/home/payouts" element={<TransactionHistory />} />

        <Route path="/branding/settings" element={<CompanySettings />} />
        <Route path="/branding/theme" element={<CompanySettings />} />
        <Route path="/branding/invoices" element={<Invoice />} />

        <Route path="/courses" element={<AvailableCourses />} />
        <Route path="/courses/preview/:id" element={<CoursePreview />} />
        <Route path="/courses/price/:id" element={<SetPrice />} />
        <Route path="/courses/demo" element={<AvailableCourses />} />

        <Route path="/orders" element={<RecentOrders />} />
        <Route path="/orders/:id" element={<EnrollmentPage />} />

        <Route path="/earnings" element={<SalesDashboard />} />
        <Route path="/earnings/payouts" element={<TransactionHistory />} />
        <Route path="/earnings/statement" element={<MonthlyStatement />} />

        <Route path="/gst/config" element={<Invoice />} />
        <Route path="/invoices/send" element={<InvoiceDownload />} />

        <Route path="/mylearning/courses" element={<MyCourses />} />
        <Route path="/mylearning/certificates" element={<Certificates />} />

        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/onboarding/payment" element={<SubscriptionPayment />} />
        <Route path="/onboarding/activation" element={<ActivationSuccess/>} />

        <Route path="/notification" element={<Notifications />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
     

        <Route path="/settings/profile" element={<ProfileSettings />} />

        <Route path="/settings/security" element={<SecuritySettings />} />

      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;

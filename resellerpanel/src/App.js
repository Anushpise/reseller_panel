import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Login from "./Pages/Login";
import Register from "./Pages/Register";
import SalesDashboard from "./Pages/SalesDashboard";
import MonthlyStatement from "./Pages/MonthlyStatement";

import CompanySettings from "./Pages/BrandingPage";

import AvailableCourses from "./Pages/AvailableCourse";
import CoursePreview from "./Pages/coursepreview";
import SetPrice from "./Pages/SetPrice";

import RecentOrders from "./Pages/Orders";

import InvoiceDownload from "./Pages/Download";

import MyCourses from "./Pages/MyCourse";

import Notifications from "./Pages/Notification";
import SubscriptionPage from "./Pages/Subscription";
import ActivationSuccess from "./Components/activation";
import SecuritySettings from "./Pages/Security";
import PaymentPage from "./Pages/SusbscriptionPayment";
import SuccessPage from "./Pages/Success";
import DemoAccess from "./Pages/DemoCourse";
import InvoiceSettings from "./Pages/Invoicesettings";
import DemoControlPanel from "./Pages/DemocontrolPanel";
import EnrollmentDetailsModal from "./Pages/Enrollmentpage";
import ResellerProfile from "./Pages/ResellerProfile";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import TermsConditions from "./Pages/Terms&Condition";
import RefundPolicy from "./Pages/RefundPolicy";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />

    <Routes>
``
  <Route path="/" element={<SalesDashboard />} />
  <Route path="/dashboard/monthly" element={<MonthlyStatement />} />

  <Route path="/register" element={<Register />} />
  <Route path="/onboarding/subscription" element={<SubscriptionPage />} />
  <Route path="/onboarding/payment" element={<PaymentPage />} />
  <Route path="/onboarding/activation" element={<ActivationSuccess />} />
  <Route path="/onboarding/success" element={<SuccessPage />} />

  <Route path="/courses" element={<AvailableCourses />} />
  <Route path="/courses/preview/:id" element={<CoursePreview />} />
  <Route path="/courses/price/:id" element={<SetPrice />} />
  <Route path="/demo" element={<DemoAccess />} />

  <Route path="/branding" element={<CompanySettings />} />
  <Route path="/branding/invoice-config" element={<InvoiceSettings />} />

  <Route path="/access/my-learning" element={<MyCourses />} />
  <Route path="/access/demo-control" element={<DemoControlPanel />} />

  <Route path="/finance/earnings" element={<SalesDashboard />} />
  <Route path="/finance/billing" element={<InvoiceDownload />} />
  <Route path="/finance/statement" element={<MonthlyStatement />} />

 
  <Route path="/orders" element={<RecentOrders />} />
  <Route path="/orders/details" element={<EnrollmentDetailsModal />} />

 
  <Route path="/notifications" element={<Notifications />} />


  <Route path="/settings/profile" element={<ResellerProfile />} />
  <Route path="/settings/security" element={<SecuritySettings />} />


  <Route path="/login" element={<Login />} />

  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
  <Route path="/terms-and-conditions" element={<TermsConditions />} />
  <Route path="/refund-policy" element={<RefundPolicy />} />

</Routes>


      <Footer />
    </BrowserRouter>
  );
};

export default App;

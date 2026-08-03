import { Routes, Route, Navigate } from "react-router-dom";

import AuthLayout from "../layouts/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";
import DashboardLayout from "../components/layout/DashboardLayout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

import Dashboard from "../pages/dashboard/Dashboard";
import Projects from "../pages/dashboard/Projects";
import Profile from "../pages/dashboard/Profile";
import Plans from "../pages/dashboard/Plans";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />
      </Route>

      {/* Protected Dashboard Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="profile" element={<Profile />} />
        <Route path="plans" element={<Plans />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
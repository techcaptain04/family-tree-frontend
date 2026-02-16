import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Members from '../pages/Members';
import Dashboard from '../pages/Dashboard';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import PublicRoute from '../routes/PublicRoute';
import ProtectedRoute from '../routes/ProtectedRoute';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/members"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Members />
              </MainLayout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <MainLayout>
                <Dashboard />
              </MainLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUp />
            </PublicRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <PublicRoute>
              <SignIn />
            </PublicRoute>
          }
        />
        <Route path="*" element={<Navigate to="/signin" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

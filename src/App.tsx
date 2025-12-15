import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginSelection } from './pages/LoginSelection';
import { Login } from './pages/Login';
import { OwnerProfile } from './pages/owner/OwnerProfile';
import { RegisterPet } from './pages/owner/RegisterPet';
import { VeterinarianDashboard } from './pages/veterinarian/VeterinarianDashboard';
import { AppointmentForm } from './pages/veterinarian/AppointmentForm';

const PrivateRoute: React.FC<{ children: React.ReactNode; allowedRole?: string }> = ({ 
  children, 
  allowedRole 
}) => {
  const { isAuthenticated, user } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && user?.role !== allowedRole) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <Routes>
      {/* Public Routes */}
      <Route 
        path="/login" 
        element={
          isAuthenticated ? (
            <Navigate to={user?.role === 'owner' ? '/owner/profile' : '/veterinarian/dashboard'} replace />
          ) : (
            <LoginSelection />
          )
        } 
      />
      <Route path="/login/:role" element={<Login />} />

      {/* Owner Routes */}
      <Route
        path="/owner/profile"
        element={
          <PrivateRoute allowedRole="owner">
            <OwnerProfile />
          </PrivateRoute>
        }
      />
      <Route
        path="/owner/register-pet"
        element={
          <PrivateRoute allowedRole="owner">
            <RegisterPet />
          </PrivateRoute>
        }
      />

      {/* Veterinarian Routes */}
      <Route
        path="/veterinarian/dashboard"
        element={
          <PrivateRoute allowedRole="veterinarian">
            <VeterinarianDashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/veterinarian/appointment/:petId"
        element={
          <PrivateRoute allowedRole="veterinarian">
            <AppointmentForm />
          </PrivateRoute>
        }
      />

      {/* Default Route */}
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to={user?.role === 'owner' ? '/owner/profile' : '/veterinarian/dashboard'} replace />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      {/* 404 Route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;

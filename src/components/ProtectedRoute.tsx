import React from 'react';
import { Navigate } from 'react-router-dom';
interface ProtectedRouteProps {
  isLoggedIn: boolean;
  children: React.ReactNode;
}
export const ProtectedRoute = ({
  isLoggedIn,
  children
}: ProtectedRouteProps) => {
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return <>{children}</>;
};
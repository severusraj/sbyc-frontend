import React from 'react';
import { Navigate } from 'react-router-dom';
import { AdminLayout } from './AdminLayout';
interface ProtectedAdminRouteProps {
  isAdmin: boolean;
  children: React.ReactNode;
}
export const ProtectedAdminRoute = ({
  isAdmin,
  children
}: ProtectedAdminRouteProps) => {
  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }
  return <AdminLayout>{children}</AdminLayout>;
};
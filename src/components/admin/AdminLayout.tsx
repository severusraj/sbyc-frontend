import React, { useState } from 'react';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { Navigate } from 'react-router-dom';
interface AdminLayoutProps {
  children: React.ReactNode;
}
export const AdminLayout = ({
  children
}: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {
    isAdminAuthenticated
  } = useAdminAuth();
  if (!isAdminAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }
  return <div className="min-h-screen bg-gray-100">
      <AdminSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="lg:pl-64">
        <AdminHeader onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 lg:p-8 mt-16">{children}</main>
      </div>
      {sidebarOpen && <div className="fixed inset-0 bg-black/50 lg:hidden z-20" onClick={() => setSidebarOpen(false)} />}
    </div>;
};
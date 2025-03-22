import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from './components/layout/MainLayout';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { MembersPage } from './pages/admin/MembersPage';
import { ContentPage } from './pages/admin/ContentPage';
import { MediaPage } from './pages/admin/MediaPage';
import { Home } from './pages/Home';
import { HotelPage } from './pages/HotelPage';
import { DiningPage } from './pages/DiningPage';
import { EventsPage } from './pages/EventsPage';
import { FacilitiesPage } from './pages/admin/FacilitiesPage';
import { MarinaPage } from './pages/MarinaPage';
import { MembershipPage } from './pages/MembershipPage';
import { ReciprocalClubsPage } from './pages/ReciprocalClubsPage';
import { MemberDashboard } from './components/member/MemberDashboard';
import { MemberSettings } from './components/member/MemberSettings';
import { MemberReservations } from './components/member/MemberReservations';
import { MemberNotifications } from './components/member/MemberNotifications';
import { ProtectedRoute } from './components/ProtectedRoute';
import { SettingsPage } from './pages/admin/SettingsPage';
import { ReservationsPage } from './pages/admin/ReservationsPage';
import { BillingPage } from './pages/admin/BillingPage';
export function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return <AdminAuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="/admin/*" element={<AdminLayout>
                <Routes>
                  <Route path="/dashboard" element={<AdminDashboard />} />
                  <Route path="/members" element={<MembersPage />} />
                  <Route path="/reservations" element={<ReservationsPage />} />
                  <Route path="/billing" element={<BillingPage />} />
                  <Route path="/content" element={<ContentPage />} />
                  <Route path="/media" element={<MediaPage />} />
                  <Route path="/facilities" element={<FacilitiesPage />} />
                  <Route path="/settings" element={<SettingsPage />} />
                </Routes>
              </AdminLayout>} />
          <Route element={<MainLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}>
            <Route path="/" element={<Home />} />
            <Route path="/hotel" element={<HotelPage />} />
            <Route path="/dining" element={<DiningPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/marina" element={<MarinaPage />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/reciprocal-clubs" element={<ReciprocalClubsPage />} />
            <Route path="/member/dashboard" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
                  <MemberDashboard />
                </ProtectedRoute>} />
            <Route path="/member/settings" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
                  <MemberSettings />
                </ProtectedRoute>} />
            <Route path="/member/reservations" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
                  <MemberReservations />
                </ProtectedRoute>} />
            <Route path="/member/notifications" element={<ProtectedRoute isLoggedIn={isLoggedIn}>
                  <MemberNotifications />
                </ProtectedRoute>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AdminAuthProvider>;
}
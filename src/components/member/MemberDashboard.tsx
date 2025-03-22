import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Ship, Hotel, Calendar, CreditCard, Bell, Settings, Activity, Clock } from 'lucide-react';
import { BookingModal } from '../BookingModal';
import { PaymentModal } from './PaymentModal';
import { ReservationModal } from './ReservationModal';
export const MemberDashboard = () => {
  const navigate = useNavigate();
  const [selectedReservation, setSelectedReservation] = useState<any>(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const memberInfo = {
    name: 'John Smith',
    membershipType: 'Premium Member',
    memberSince: '2020',
    status: 'Active',
    nextPayment: '2024-04-01',
    membershipPoints: '2,500'
  };
  const quickActions = [{
    icon: <Ship className="w-6 h-6" />,
    title: 'Book Marina',
    description: 'Reserve your berth',
    action: () => setShowBookingModal(true)
  }, {
    icon: <Hotel className="w-6 h-6" />,
    title: 'Book Room',
    description: 'Reserve accommodation',
    action: () => navigate('/hotel')
  }, {
    icon: <CreditCard className="w-6 h-6" />,
    title: 'Pay Dues',
    description: 'Manage payments',
    action: () => setShowPaymentModal(true)
  }, {
    icon: <Settings className="w-6 h-6" />,
    title: 'Settings',
    description: 'Update preferences',
    action: () => navigate('/member/settings')
  }];
  const upcomingReservations = [{
    type: 'Marina',
    date: '2024-03-20',
    time: '08:00 AM',
    location: 'Berth B-15',
    details: 'Premium Berth Space',
    status: 'Confirmed'
  }, {
    type: 'Hotel',
    date: '2024-04-15',
    time: '02:00 PM',
    location: 'Deluxe Ocean View',
    details: 'King Bed, Ocean View',
    status: 'Pending'
  }];
  const recentActivity = [{
    type: 'payment',
    icon: <CreditCard className="w-5 h-5" />,
    title: 'Membership Payment',
    description: 'Monthly dues processed',
    date: '2 days ago'
  }, {
    type: 'booking',
    icon: <Calendar className="w-5 h-5" />,
    title: 'Marina Booking',
    description: 'Reserved Berth B-15',
    date: '3 days ago'
  }, {
    type: 'notification',
    icon: <Bell className="w-5 h-5" />,
    title: 'Event Registration',
    description: 'Registered for Summer Yacht Party',
    date: '1 week ago'
  }];
  return <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-navy-900 text-white rounded-lg p-8 mb-8">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold mb-2">
                Welcome back, {memberInfo.name}
              </h1>
              <p className="text-gray-300">
                {memberInfo.membershipType} • Member since{' '}
                {memberInfo.memberSince}
              </p>
            </div>
            <div className="bg-green-500 px-3 py-1 rounded-full text-sm">
              {memberInfo.status}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-gray-300 mb-1">Next Payment Due</p>
              <p className="text-xl font-semibold">{memberInfo.nextPayment}</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-gray-300 mb-1">Membership Points</p>
              <p className="text-xl font-semibold">
                {memberInfo.membershipPoints}
              </p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <p className="text-gray-300 mb-1">Active Reservations</p>
              <p className="text-xl font-semibold">
                {upcomingReservations.length}
              </p>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-navy-900 mb-6">
                Quick Actions
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickActions.map((action, index) => <button key={index} onClick={action.action} className="flex flex-col items-center p-4 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-navy-900 mb-2">{action.icon}</div>
                    <span className="font-medium text-gray-900">
                      {action.title}
                    </span>
                    <span className="text-sm text-gray-500">
                      {action.description}
                    </span>
                  </button>)}
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-navy-900">
                  Upcoming Reservations
                </h2>
                <button onClick={() => navigate('/member/reservations')} className="text-navy-900 hover:text-navy-800">
                  View All →
                </button>
              </div>
              <div className="space-y-4">
                {upcomingReservations.map((reservation, index) => <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-sm transition-shadow">
                    <div className="flex items-start space-x-4">
                      <div className="text-navy-900">
                        {reservation.type === 'Marina' ? <Ship className="w-5 h-5" /> : <Hotel className="w-5 h-5" />}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {reservation.type}
                        </p>
                        <p className="text-sm text-gray-500">
                          {reservation.location}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          {reservation.date}
                          <Clock className="w-4 h-4 ml-2 mr-1" />
                          {reservation.time}
                        </div>
                      </div>
                    </div>
                    <button onClick={() => setSelectedReservation(reservation)} className="text-navy-900 hover:text-navy-800">
                      View Details →
                    </button>
                  </div>)}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-navy-900">
                  Recent Activity
                </h2>
                <Activity className="w-5 h-5 text-gray-400" />
              </div>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="text-navy-900">{activity.icon}</div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {activity.title}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.description}
                      </p>
                      <p className="text-xs text-gray-400 mt-1">
                        {activity.date}
                      </p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedReservation && <ReservationModal reservation={selectedReservation} onClose={() => setSelectedReservation(null)} />}
      {showPaymentModal && <PaymentModal amount={25000} onClose={() => setShowPaymentModal(false)} />}
      {showBookingModal && <BookingModal room={{
      type: 'Marina Berth',
      price: '₱5,000'
    }} onClose={() => setShowBookingModal(false)} />}
    </div>;
};
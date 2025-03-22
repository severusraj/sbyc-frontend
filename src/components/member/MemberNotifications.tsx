import React from 'react';
import { Bell, Calendar, Ship, CreditCard } from 'lucide-react';
export const MemberNotifications = () => {
  const notifications = [{
    id: 1,
    type: 'reservation',
    icon: <Ship className="w-5 h-5" />,
    message: 'Your marina reservation has been confirmed',
    date: '2 hours ago',
    read: false
  }, {
    id: 2,
    type: 'event',
    icon: <Calendar className="w-5 h-5" />,
    message: 'New event: Summer Yacht Party',
    date: '1 day ago',
    read: true
  }, {
    id: 3,
    type: 'billing',
    icon: <CreditCard className="w-5 h-5" />,
    message: 'Your membership fee is due in 7 days',
    date: '2 days ago',
    read: false
  }];
  return <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-navy-900">Notifications</h2>
            <Bell className="w-6 h-6 text-gray-500" />
          </div>
          <div className="space-y-4">
            {notifications.map(notification => <div key={notification.id} className={`p-4 rounded-lg border ${notification.read ? 'bg-white' : 'bg-blue-50'}`}>
                <div className="flex items-start">
                  <div className="flex-shrink-0 text-navy-900">
                    {notification.icon}
                  </div>
                  <div className="ml-4 flex-1">
                    <p className={`text-gray-900 ${!notification.read && 'font-medium'}`}>
                      {notification.message}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {notification.date}
                    </p>
                  </div>
                  {!notification.read && <div className="ml-4 flex-shrink-0">
                      <div className="w-2 h-2 bg-blue-600 rounded-full" />
                    </div>}
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </div>;
};
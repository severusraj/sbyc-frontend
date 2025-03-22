import React from 'react';
import { Users, Calendar, DollarSign, Ship } from 'lucide-react';
const stats = [{
  name: 'Total Members',
  value: '2,834',
  change: '+12.5%',
  changeType: 'positive',
  icon: <Users className="w-6 h-6" />
}, {
  name: 'Active Reservations',
  value: '156',
  change: '+8.2%',
  changeType: 'positive',
  icon: <Calendar className="w-6 h-6" />
}, {
  name: 'Monthly Revenue',
  value: '₱4.2M',
  change: '+23.1%',
  changeType: 'positive',
  icon: <DollarSign className="w-6 h-6" />
}, {
  name: 'Marina Occupancy',
  value: '85%',
  change: '-2.3%',
  changeType: 'negative',
  icon: <Ship className="w-6 h-6" />
}];
export const AdminDashboard = () => {
  return <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600">Welcome back, Admin</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-navy-900/10 rounded-lg">
                <div className="text-navy-900">{stat.icon}</div>
              </div>
              <span className={`text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </span>
            </div>
            <h3 className="text-gray-600 text-sm font-medium">{stat.name}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>)}
      </div>
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {/* Activity items would go here */}
            <p className="text-gray-600">Loading activities...</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <div className="space-y-4">
            {/* Event items would go here */}
            <p className="text-gray-600">Loading events...</p>
          </div>
        </div>
      </div>
    </div>;
};
import React, { useState } from 'react';
import { Search, Filter, Eye, Check, X } from 'lucide-react';
const reservations = [{
  id: 1,
  type: 'Marina',
  memberName: 'John Smith',
  membershipId: 'M001',
  date: '2024-03-20',
  time: '08:00 AM',
  facility: 'Berth B-15',
  status: 'pending'
}, {
  id: 2,
  type: 'Hotel',
  memberName: 'Sarah Chen',
  membershipId: 'M045',
  date: '2024-03-22',
  time: '02:00 PM',
  facility: 'Deluxe Ocean View',
  status: 'confirmed'
}, {
  id: 3,
  type: 'Dining',
  memberName: 'Michael Rodriguez',
  membershipId: 'M089',
  date: '2024-03-25',
  time: '07:00 PM',
  facility: 'The Lighthouse Restaurant',
  status: 'pending'
}];
export const ReservationsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">
          Reservations Management
        </h1>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search reservations..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navy-900/20">
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Reservation Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reservations.map(reservation => <tr key={reservation.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {reservation.type}
                      </p>
                      <p className="text-sm text-gray-500">
                        {reservation.facility}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {reservation.memberName}
                      </p>
                      <p className="text-sm text-gray-500">
                        {reservation.membershipId}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-sm text-gray-900">
                        {reservation.date}
                      </p>
                      <p className="text-sm text-gray-500">
                        {reservation.time}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${reservation.status === 'confirmed' ? 'bg-green-100 text-green-800' : reservation.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {reservation.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="text-gray-400 hover:text-navy-900">
                      <Eye size={18} />
                    </button>
                    {reservation.status === 'pending' && <>
                        <button className="text-gray-400 hover:text-green-600">
                          <Check size={18} />
                        </button>
                        <button className="text-gray-400 hover:text-red-600">
                          <X size={18} />
                        </button>
                      </>}
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
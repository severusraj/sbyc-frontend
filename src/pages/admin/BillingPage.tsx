import React, { useState } from 'react';
import { Search, Filter, Download, DollarSign, FileText } from 'lucide-react';
const transactions = [{
  id: 1,
  member: 'John Smith',
  membershipId: 'M001',
  type: 'Membership Dues',
  amount: 25000,
  status: 'paid',
  date: '2024-02-20',
  invoiceNo: 'INV-2024-001'
}, {
  id: 2,
  member: 'Sarah Chen',
  membershipId: 'M045',
  type: 'Marina Fees',
  amount: 15000,
  status: 'pending',
  date: '2024-02-18',
  invoiceNo: 'INV-2024-002'
}, {
  id: 3,
  member: 'Michael Rodriguez',
  membershipId: 'M089',
  type: 'Event Booking',
  amount: 5000,
  status: 'overdue',
  date: '2024-02-15',
  invoiceNo: 'INV-2024-003'
}];
const stats = [{
  name: 'Total Revenue (MTD)',
  value: '₱458,000',
  change: '+12.5%',
  changeType: 'positive'
}, {
  name: 'Outstanding Payments',
  value: '₱124,500',
  change: '-8.2%',
  changeType: 'negative'
}, {
  name: 'Average Payment Time',
  value: '4.2 days',
  change: '+1.1 days',
  changeType: 'negative'
}];
export const BillingPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Billing Management</h1>
        <button className="inline-flex items-center space-x-2 bg-navy-900 text-white px-4 py-2 rounded-md hover:bg-navy-800 transition-colors">
          <FileText size={20} />
          <span>Generate Invoice</span>
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map(stat => <div key={stat.name} className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
            <div className="mt-2 flex items-baseline">
              <p className="text-2xl font-semibold text-gray-900">
                {stat.value}
              </p>
              <p className={`ml-2 text-sm font-medium ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change}
              </p>
            </div>
          </div>)}
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search transactions..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navy-900/20">
                <option value="all">All Status</option>
                <option value="paid">Paid</option>
                <option value="pending">Pending</option>
                <option value="overdue">Overdue</option>
              </select>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Invoice
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Member
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Type
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
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
              {transactions.map(transaction => <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {transaction.invoiceNo}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {transaction.member}
                    </div>
                    <div className="text-sm text-gray-500">
                      {transaction.membershipId}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-gray-900">
                      {transaction.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      ₱{transaction.amount.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.status === 'paid' ? 'bg-green-100 text-green-800' : transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-navy-900 hover:text-navy-800 mr-4">
                      <Download size={18} />
                    </button>
                    <button className="text-navy-900 hover:text-navy-800">
                      <DollarSign size={18} />
                    </button>
                  </td>
                </tr>)}
            </tbody>
          </table>
        </div>
      </div>
    </div>;
};
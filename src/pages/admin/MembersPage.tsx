import React, { useState } from 'react';
import { Plus, Search, Filter, MoreHorizontal } from 'lucide-react';
import { MemberTable } from '../../components/admin/members/MemberTable';
import { CreateMemberModal } from '../../components/admin/members/CreateMemberModal';
export const MembersPage = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  return <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Members</h1>
        <button onClick={() => setShowCreateModal(true)} className="bg-navy-900 text-white px-4 py-2 rounded-md hover:bg-navy-800 transition-colors flex items-center space-x-2">
          <Plus size={20} />
          <span>Add Member</span>
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search members..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="pl-10 pr-4 py-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-400" />
              <select value={filterStatus} onChange={e => setFilterStatus(e.target.value)} className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-navy-900/20">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="pending">Pending</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
        <MemberTable searchQuery={searchQuery} filterStatus={filterStatus} />
      </div>
      {showCreateModal && <CreateMemberModal onClose={() => setShowCreateModal(false)} />}
    </div>;
};
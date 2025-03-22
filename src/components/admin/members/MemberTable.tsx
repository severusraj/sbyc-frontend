import React, { useState } from 'react';
import { MoreHorizontal, Eye, Edit, Trash } from 'lucide-react';
import { MemberDetailsModal } from './MemberDetailsModal';
interface MemberTableProps {
  searchQuery: string;
  filterStatus: string;
}
export const MemberTable = ({
  searchQuery,
  filterStatus
}: MemberTableProps) => {
  const [selectedMember, setSelectedMember] = useState<any>(null);
  // Dummy data - replace with actual API call
  const members = [{
    id: 1,
    name: 'John Smith',
    email: 'john.smith@example.com',
    membershipType: 'Premium',
    status: 'active',
    joinDate: '2020-01-15',
    lastActive: '2024-02-20'
  }, {
    id: 2,
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    membershipType: 'Regular',
    status: 'pending',
    joinDate: '2024-02-01',
    lastActive: '2024-02-19'
  }
  // Add more dummy data as needed
  ];
  return <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Member
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Membership Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Join Date
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Last Active
            </th>
            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {members.map(member => <tr key={member.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <div className="h-10 w-10 rounded-full bg-navy-900 text-white flex items-center justify-center font-medium">
                      {member.name.charAt(0)}
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {member.name}
                    </div>
                    <div className="text-sm text-gray-500">{member.email}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="text-sm text-gray-900">
                  {member.membershipType}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${member.status === 'active' ? 'bg-green-100 text-green-800' : member.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                  {member.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(member.joinDate).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {new Date(member.lastActive).toLocaleDateString()}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end space-x-2">
                  <button onClick={() => setSelectedMember(member)} className="text-gray-400 hover:text-navy-900">
                    <Eye size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-navy-900">
                    <Edit size={18} />
                  </button>
                  <button className="text-gray-400 hover:text-red-600">
                    <Trash size={18} />
                  </button>
                </div>
              </td>
            </tr>)}
        </tbody>
      </table>
      {selectedMember && <MemberDetailsModal member={selectedMember} onClose={() => setSelectedMember(null)} />}
    </div>;
};
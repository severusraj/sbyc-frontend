import React from 'react';
import { X, Mail, Phone, Calendar, CreditCard } from 'lucide-react';
interface MemberDetailsModalProps {
  member: any;
  onClose: () => void;
}
export const MemberDetailsModal = ({
  member,
  onClose
}: MemberDetailsModalProps) => {
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-navy-900">Member Details</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-6">
          <div className="flex items-center">
            <div className="h-20 w-20 rounded-full bg-navy-900 text-white flex items-center justify-center text-2xl font-medium">
              {member.name.charAt(0)}
            </div>
            <div className="ml-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.membershipType} Member</p>
              <span className={`mt-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${member.status === 'active' ? 'bg-green-100 text-green-800' : member.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                {member.status}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex items-center space-x-3">
              <Mail className="text-gray-400" size={20} />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="text-gray-900">{member.email}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Calendar className="text-gray-400" size={20} />
              <div>
                <p className="text-sm text-gray-500">Join Date</p>
                <p className="text-gray-900">
                  {new Date(member.joinDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>
          <div className="border-t pt-6">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Recent Activity
            </h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <CreditCard className="text-gray-400" size={20} />
                  <div>
                    <p className="text-gray-900">Membership Payment</p>
                    <p className="text-sm text-gray-500">₱25,000</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500">2 days ago</p>
              </div>
              {/* Add more activity items as needed */}
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Close
            </button>
            <button className="px-4 py-2 bg-navy-900 text-white rounded-md hover:bg-navy-800">
              Edit Member
            </button>
          </div>
        </div>
      </div>
    </div>;
};
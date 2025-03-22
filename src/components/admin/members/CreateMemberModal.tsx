import React, { useState } from 'react';
import { X } from 'lucide-react';
interface CreateMemberModalProps {
  onClose: () => void;
}
export const CreateMemberModal = ({
  onClose
}: CreateMemberModalProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    membershipType: 'regular',
    status: 'active'
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    onClose();
  };
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-navy-900">Add New Member</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">First Name *</label>
              <input type="text" required value={formData.firstName} onChange={e => setFormData({
              ...formData,
              firstName: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name *</label>
              <input type="text" required value={formData.lastName} onChange={e => setFormData({
              ...formData,
              lastName: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email *</label>
            <input type="email" required value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone Number</label>
            <input type="tel" value={formData.phone} onChange={e => setFormData({
            ...formData,
            phone: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Membership Type *
            </label>
            <select required value={formData.membershipType} onChange={e => setFormData({
            ...formData,
            membershipType: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20">
              <option value="regular">Regular</option>
              <option value="premium">Premium</option>
              <option value="corporate">Corporate</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Status *</label>
            <select required value={formData.status} onChange={e => setFormData({
            ...formData,
            status: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20">
              <option value="active">Active</option>
              <option value="pending">Pending</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-navy-900 text-white rounded-md hover:bg-navy-800">
              Create Member
            </button>
          </div>
        </form>
      </div>
    </div>;
};
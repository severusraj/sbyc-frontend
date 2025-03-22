import React, { useState } from 'react';
import { useToast } from '../hooks/useToast';
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  occupation: string;
  boatOwner: string;
  membershipType: string;
  message: string;
}
const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  occupation: '',
  boatOwner: '',
  membershipType: 'regular',
  message: ''
};
export const MembershipForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const {
    showToast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      showToast('Application submitted successfully!', 'success');
      setFormData(initialFormData);
    } catch (error) {
      showToast('Failed to submit application. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  return <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h3 className="text-2xl font-bold text-navy-900 mb-6">
          Membership Application
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
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
          <div>
            <label className="block text-gray-700 mb-2">Email *</label>
            <input type="email" required value={formData.email} onChange={e => setFormData({
            ...formData,
            email: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Phone *</label>
            <input type="tel" required value={formData.phone} onChange={e => setFormData({
            ...formData,
            phone: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Occupation</label>
            <input type="text" value={formData.occupation} onChange={e => setFormData({
            ...formData,
            occupation: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Are you a boat owner?
            </label>
            <select value={formData.boatOwner} onChange={e => setFormData({
            ...formData,
            boatOwner: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20">
              <option value="">Select</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">
              Membership Type *
            </label>
            <select required value={formData.membershipType} onChange={e => setFormData({
            ...formData,
            membershipType: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20">
              <option value="regular">Regular Membership</option>
              <option value="corporate">Corporate Membership</option>
              <option value="family">Family Membership</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-700 mb-2">
              Additional Information
            </label>
            <textarea rows={4} value={formData.message} onChange={e => setFormData({
            ...formData,
            message: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" placeholder="Tell us why you'd like to join SBYC..." />
          </div>
        </div>
        <button type="submit" disabled={isLoading} className="mt-6 w-full bg-navy-900 text-white py-3 rounded-md hover:bg-navy-800 transition-colors disabled:opacity-50">
          {isLoading ? 'Submitting...' : 'Submit Application'}
        </button>
      </div>
    </form>;
};
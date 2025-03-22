import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';
interface CreateFacilityModalProps {
  onClose: () => void;
  onSubmit: (facility: any) => void;
}
export const CreateFacilityModal = ({
  onClose,
  onSubmit
}: CreateFacilityModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    type: 'Recreation',
    location: '',
    status: 'operational',
    image: '',
    description: '',
    maintenanceSchedule: {
      last: new Date().toISOString().split('T')[0],
      next: new Date().toISOString().split('T')[0]
    }
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      onSubmit(formData);
      onClose();
    } catch (error) {
      console.error('Error creating facility:', error);
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-navy-900">Add New Facility</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Facility Name *</label>
            <input type="text" required value={formData.name} onChange={e => setFormData({
            ...formData,
            name: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Type *</label>
              <select required value={formData.type} onChange={e => setFormData({
              ...formData,
              type: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading}>
                <option value="Recreation">Recreation</option>
                <option value="Sports">Sports</option>
                <option value="Fitness">Fitness</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Status *</label>
              <select required value={formData.status} onChange={e => setFormData({
              ...formData,
              status: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading}>
                <option value="operational">Operational</option>
                <option value="maintenance">Under Maintenance</option>
                <option value="closed">Closed</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Location *</label>
            <input type="text" required value={formData.location} onChange={e => setFormData({
            ...formData,
            location: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Image URL *</label>
            <div className="flex space-x-4">
              <input type="url" required value={formData.image} onChange={e => setFormData({
              ...formData,
              image: e.target.value
            })} className="flex-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" placeholder="https://" disabled={isLoading} />
              <button type="button" className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 inline-flex items-center space-x-2" disabled={isLoading}>
                <Upload size={20} />
                <span>Upload</span>
              </button>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Description</label>
            <textarea value={formData.description} onChange={e => setFormData({
            ...formData,
            description: e.target.value
          })} rows={4} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Last Maintenance *
              </label>
              <input type="date" required value={formData.maintenanceSchedule.last} onChange={e => setFormData({
              ...formData,
              maintenanceSchedule: {
                ...formData.maintenanceSchedule,
                last: e.target.value
              }
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Next Maintenance *
              </label>
              <input type="date" required value={formData.maintenanceSchedule.next} onChange={e => setFormData({
              ...formData,
              maintenanceSchedule: {
                ...formData.maintenanceSchedule,
                next: e.target.value
              }
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
            </div>
          </div>
          <div className="flex justify-end space-x-4">
            <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50" disabled={isLoading}>
              Cancel
            </button>
            <button type="submit" disabled={isLoading} className="px-4 py-2 bg-navy-900 text-white rounded-md hover:bg-navy-800 transition-colors disabled:opacity-50">
              {isLoading ? 'Creating...' : 'Create Facility'}
            </button>
          </div>
        </form>
      </div>
    </div>;
};
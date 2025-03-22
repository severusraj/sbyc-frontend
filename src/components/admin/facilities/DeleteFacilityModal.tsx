import React from 'react';
import { X, AlertTriangle } from 'lucide-react';
interface DeleteFacilityModalProps {
  facilityName: string;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}
export const DeleteFacilityModal = ({
  facilityName,
  onClose,
  onConfirm,
  isLoading = false
}: DeleteFacilityModalProps) => {
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-navy-900">Delete Facility</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" disabled={isLoading}>
            <X size={24} />
          </button>
        </div>
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-red-100 text-red-600 mb-4">
            <AlertTriangle size={24} />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Confirm Deletion
          </h3>
          <p className="text-gray-600">
            Are you sure you want to delete{' '}
            <span className="font-semibold">{facilityName}</span>? This action
            cannot be undone.
          </p>
        </div>
        <div className="flex justify-end space-x-4">
          <button onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50" disabled={isLoading}>
            Cancel
          </button>
          <button onClick={onConfirm} disabled={isLoading} className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50">
            {isLoading ? 'Deleting...' : 'Delete Facility'}
          </button>
        </div>
      </div>
    </div>;
};
import React from 'react';
import { X, Calendar, MapPin, Clock } from 'lucide-react';
interface ReservationType {
  type: string;
  date: string;
  details: string;
  status?: string;
  time?: string;
  location?: string;
  confirmationNumber?: string;
  specialRequests?: string;
}
interface ReservationModalProps {
  reservation: ReservationType;
  onClose: () => void;
}
export const ReservationModal = ({
  reservation,
  onClose
}: ReservationModalProps) => {
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Reservation Details
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <Calendar className="w-5 h-5 text-navy-900 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Date</p>
              <p className="text-gray-600">{reservation.date}</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <Clock className="w-5 h-5 text-navy-900 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Time</p>
              <p className="text-gray-600">
                {reservation.time || 'Not specified'}
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <MapPin className="w-5 h-5 text-navy-900 mt-1" />
            <div>
              <p className="font-semibold text-gray-700">Location</p>
              <p className="text-gray-600">
                {reservation.location || 'Not specified'}
              </p>
            </div>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">
              Reservation Details
            </h3>
            <p className="text-gray-600">{reservation.details}</p>
          </div>
          <div className="border-t pt-4">
            <h3 className="font-semibold text-gray-700 mb-2">
              Additional Information
            </h3>
            <div className="space-y-2">
              <p className="text-gray-600">
                <span className="font-medium">Confirmation Number:</span>{' '}
                {reservation.confirmationNumber || 'N/A'}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Status:</span>{' '}
                <span className="text-green-600">
                  {reservation.status || 'Confirmed'}
                </span>
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Special Requests:</span>{' '}
                {reservation.specialRequests || 'None'}
              </p>
            </div>
          </div>
          <div className="flex space-x-4">
            <button onClick={() => {
            /* Add modification logic */
          }} className="flex-1 bg-navy-900 text-white py-2 rounded-md hover:bg-navy-800 transition-colors">
              Modify Reservation
            </button>
            <button onClick={() => {
            /* Add cancellation logic */
          }} className="flex-1 border border-red-600 text-red-600 py-2 rounded-md hover:bg-red-50 transition-colors">
              Cancel Reservation
            </button>
          </div>
        </div>
      </div>
    </div>;
};
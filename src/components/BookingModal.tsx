import React, { useState } from 'react';
import { Calendar, X } from 'lucide-react';
import { useToast } from '../hooks/useToast';
interface BookingModalProps {
  room: {
    type: string;
    price: string;
  };
  onClose: () => void;
}
interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  guests: number;
}
const initialFormData: BookingFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  checkIn: '',
  checkOut: '',
  guests: 1
};
export const BookingModal = ({
  room,
  onClose
}: BookingModalProps) => {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [isLoading, setIsLoading] = useState(false);
  const [customGuests, setCustomGuests] = useState(false);
  const maxGuests = 10;
  const {
    showToast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      showToast('Booking successful! We will contact you shortly.', 'success');
      onClose();
    } catch (error) {
      showToast('Failed to process booking. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-navy-900">Book {room.type}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700" disabled={isLoading}>
            <X size={24} />
          </button>
        </div>
        <div className="mb-6">
          <p className="text-lg text-gray-600">Price: {room.price}/night</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">First Name *</label>
              <input type="text" required value={formData.firstName} onChange={e => setFormData({
              ...formData,
              firstName: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name *</label>
              <input type="text" required value={formData.lastName} onChange={e => setFormData({
              ...formData,
              lastName: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">Email *</label>
              <input type="email" required value={formData.email} onChange={e => setFormData({
              ...formData,
              email: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Phone *</label>
              <input type="tel" required value={formData.phone} onChange={e => setFormData({
              ...formData,
              phone: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">
                Check-in Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="date" required value={formData.checkIn} onChange={e => setFormData({
                ...formData,
                checkIn: e.target.value
              })} className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} min={new Date().toISOString().split('T')[0]} />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">
                Check-out Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="date" required value={formData.checkOut} onChange={e => setFormData({
                ...formData,
                checkOut: e.target.value
              })} className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} min={formData.checkIn || new Date().toISOString().split('T')[0]} />
              </div>
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">
              Number of Guests *
            </label>
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <select value={customGuests ? 'custom' : formData.guests} onChange={e => {
                if (e.target.value === 'custom') {
                  setCustomGuests(true);
                } else {
                  setCustomGuests(false);
                  setFormData({
                    ...formData,
                    guests: Number(e.target.value)
                  });
                }
              }} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading}>
                  {[1, 2, 3, 4].map(num => <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>)}
                  <option value="custom">Custom Number of Guests</option>
                </select>
              </div>
              {customGuests && <div className="mt-2">
                  <input type="number" min="1" max={maxGuests} value={formData.guests} onChange={e => {
                const value = Math.min(Math.max(1, Number(e.target.value)), maxGuests);
                setFormData({
                  ...formData,
                  guests: value
                });
              }} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" placeholder={`Enter number of guests (max ${maxGuests})`} disabled={isLoading} />
                  <p className="text-sm text-gray-500 mt-1">
                    Maximum {maxGuests} guests allowed
                  </p>
                </div>}
            </div>
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-navy-900 text-white py-3 rounded-md hover:bg-navy-800 transition-colors disabled:opacity-50">
            {isLoading ? 'Processing...' : 'Confirm Booking'}
          </button>
        </form>
      </div>
    </div>;
};
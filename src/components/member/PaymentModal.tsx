import React, { useState } from 'react';
import { X, CreditCard, Calendar } from 'lucide-react';
import { useToast } from '../../hooks/useToast';
interface PaymentModalProps {
  onClose: () => void;
  amount: number;
}
export const PaymentModal = ({
  onClose,
  amount
}: PaymentModalProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    showToast
  } = useToast();
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: ''
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 2000));
      showToast('Payment processed successfully!', 'success');
      onClose();
    } catch (error) {
      showToast('Payment failed. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-navy-900">
            Pay Membership Dues
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        <div className="mb-6">
          <p className="text-lg text-gray-600">
            Amount due:{' '}
            <span className="font-semibold">₱{amount.toLocaleString()}</span>
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 mb-2">Card Holder Name</label>
            <input type="text" required value={paymentDetails.name} onChange={e => setPaymentDetails({
            ...paymentDetails,
            name: e.target.value
          })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" placeholder="John Smith" disabled={isLoading} />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Card Number</label>
            <div className="relative">
              <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input type="text" required value={paymentDetails.cardNumber} onChange={e => setPaymentDetails({
              ...paymentDetails,
              cardNumber: e.target.value
            })} className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" placeholder="1234 5678 9012 3456" disabled={isLoading} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 mb-2">Expiry Date</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input type="text" required value={paymentDetails.expiryDate} onChange={e => setPaymentDetails({
                ...paymentDetails,
                expiryDate: e.target.value
              })} className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" placeholder="MM/YY" disabled={isLoading} />
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-2">CVV</label>
              <input type="text" required value={paymentDetails.cvv} onChange={e => setPaymentDetails({
              ...paymentDetails,
              cvv: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" placeholder="123" maxLength={3} disabled={isLoading} />
            </div>
          </div>
          <button type="submit" disabled={isLoading} className="w-full bg-navy-900 text-white py-3 rounded-md hover:bg-navy-800 transition-colors disabled:opacity-50">
            {isLoading ? 'Processing...' : `Pay ₱${amount.toLocaleString()}`}
          </button>
        </form>
      </div>
    </div>;
};
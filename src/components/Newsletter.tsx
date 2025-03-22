import React, { useState } from 'react';
import { useToast } from '../hooks/useToast';
export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {
    toast,
    showToast,
    hideToast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (email) {
        showToast('Successfully subscribed to newsletter!', 'success');
        setEmail('');
      } else {
        showToast('Please enter your email', 'error');
      }
    } catch (error) {
      showToast('Subscription failed. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  return <section className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/5 backdrop-blur-sm rounded-lg p-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with SBYC
            </h2>
            <p className="text-gray-300 mb-8">
              Subscribe to our newsletter for the latest events, promotions, and
              club news
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-3 rounded-md border border-white/10 bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20" disabled={isLoading} />
              <button type="submit" disabled={isLoading} className="px-6 py-3 bg-white text-navy-900 rounded-md font-semibold hover:bg-gray-100 transition-colors disabled:opacity-50">
                {isLoading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={hideToast} />}
    </section>;
};
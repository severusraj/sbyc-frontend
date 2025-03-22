import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { useToast } from '../../hooks/useToast';
import { Shield } from 'lucide-react';
export const AdminLogin = () => {
  const navigate = useNavigate();
  const {
    adminLogin
  } = useAdminAuth();
  const {
    showToast
  } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await adminLogin(credentials.email, credentials.password);
      showToast('Successfully logged in', 'success');
      navigate('/admin');
    } catch (error) {
      showToast('Invalid credentials. Please try the demo account.', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  return <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex flex-col items-center mb-8">
            <Shield className="w-12 h-12 text-navy-900 mb-4" />
            <h1 className="text-2xl font-bold text-navy-900">Admin Login</h1>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800 font-medium">Demo Account:</p>
            <p className="text-sm text-blue-800">Email: admin@sbyc.ph</p>
            <p className="text-sm text-blue-800">Password: admin123</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2">Email</label>
              <input type="email" required value={credentials.email} onChange={e => setCredentials({
              ...credentials,
              email: e.target.value
            })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Password</label>
              <input type="password" required value={credentials.password} onChange={e => setCredentials({
              ...credentials,
              password: e.target.value
            })} className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900/20" disabled={isLoading} />
            </div>
            <button type="submit" disabled={isLoading} className="w-full bg-navy-900 text-white py-2 rounded-lg hover:bg-navy-800 transition-colors disabled:opacity-50">
              {isLoading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>;
};
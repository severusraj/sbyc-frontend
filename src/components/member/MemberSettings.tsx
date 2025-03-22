import React, { useState } from 'react';
import { useToast } from '../../hooks/useToast';
import { User, Lock, Bell, CreditCard } from 'lucide-react';
export const MemberSettings = () => {
  const {
    showToast
  } = useToast();
  const [activeTab, setActiveTab] = useState('profile');
  const [isLoading, setIsLoading] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@example.com',
    phone: '+63 912 345 6789',
    address: '123 Marina Drive'
  });
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    smsNotifications: true,
    eventReminders: true,
    maintenanceAlerts: false
  });
  const handleProfileUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      showToast('Profile updated successfully', 'success');
    } catch (error) {
      showToast('Failed to update profile', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  const handlePasswordChange = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      showToast('Password changed successfully', 'success');
    } catch (error) {
      showToast('Failed to change password', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  const tabs = [{
    id: 'profile',
    label: 'Profile',
    icon: <User size={20} />
  }, {
    id: 'security',
    label: 'Security',
    icon: <Lock size={20} />
  }, {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell size={20} />
  }, {
    id: 'billing',
    label: 'Billing',
    icon: <CreditCard size={20} />
  }];
  return <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-sm">
          <div className="border-b">
            <div className="flex overflow-x-auto">
              {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center px-6 py-4 border-b-2 transition-colors ${activeTab === tab.id ? 'border-navy-900 text-navy-900' : 'border-transparent text-gray-500 hover:text-navy-900'}`}>
                  {tab.icon}
                  <span className="ml-2">{tab.label}</span>
                </button>)}
            </div>
          </div>
          <div className="p-6">
            {activeTab === 'profile' && <form onSubmit={handleProfileUpdate} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      First Name
                    </label>
                    <input type="text" value={profileData.firstName} onChange={e => setProfileData({
                  ...profileData,
                  firstName: e.target.value
                })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input type="text" value={profileData.lastName} onChange={e => setProfileData({
                  ...profileData,
                  lastName: e.target.value
                })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input type="email" value={profileData.email} onChange={e => setProfileData({
                  ...profileData,
                  email: e.target.value
                })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input type="tel" value={profileData.phone} onChange={e => setProfileData({
                  ...profileData,
                  phone: e.target.value
                })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-gray-700 mb-2">Address</label>
                    <input type="text" value={profileData.address} onChange={e => setProfileData({
                  ...profileData,
                  address: e.target.value
                })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                </div>
                <button type="submit" disabled={isLoading} className="bg-navy-900 text-white px-6 py-2 rounded-md hover:bg-navy-800 transition-colors disabled:opacity-50">
                  {isLoading ? 'Saving...' : 'Save Changes'}
                </button>
              </form>}
            {activeTab === 'notifications' && <div className="space-y-6">
                <h3 className="text-lg font-semibold mb-4">
                  Notification Preferences
                </h3>
                <div className="space-y-4">
                  {Object.entries(notificationSettings).map(([key, value]) => <div key={key} className="flex items-center justify-between">
                      <span className="text-gray-700">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" checked={value} onChange={() => setNotificationSettings({
                    ...notificationSettings,
                    [key]: !value
                  })} className="sr-only peer" />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-900/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-900"></div>
                      </label>
                    </div>)}
                </div>
                <button onClick={() => showToast('Notification settings saved', 'success')} className="bg-navy-900 text-white px-6 py-2 rounded-md hover:bg-navy-800 transition-colors">
                  Save Preferences
                </button>
              </div>}
            {activeTab === 'security' && <form onSubmit={handlePasswordChange} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Current Password
                    </label>
                    <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      New Password
                    </label>
                    <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Confirm New Password
                    </label>
                    <input type="password" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                </div>
                <button type="submit" className="bg-navy-900 text-white px-6 py-2 rounded-md hover:bg-navy-800 transition-colors">
                  Change Password
                </button>
              </form>}
            {activeTab === 'billing' && <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Current Plan</h3>
                  <p className="text-gray-600">Premium Membership</p>
                  <p className="text-sm text-gray-500">
                    Next billing date: January 1, 2024
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Payment Methods</h3>
                  <div className="border rounded-lg p-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <CreditCard className="text-gray-400 mr-3" />
                      <div>
                        <p className="font-medium">Visa ending in 4242</p>
                        <p className="text-sm text-gray-500">Expires 12/24</p>
                      </div>
                    </div>
                    <button className="text-navy-900 hover:text-navy-800">
                      Edit
                    </button>
                  </div>
                  <button className="text-navy-900 hover:text-navy-800 font-medium">
                    + Add Payment Method
                  </button>
                </div>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
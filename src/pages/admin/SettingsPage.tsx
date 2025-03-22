import React, { useState } from 'react';
import { Settings, User, Bell, Shield, Mail, CreditCard, Database } from 'lucide-react';
export const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isLoading, setIsLoading] = useState(false);
  const handleSave = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };
  const tabs = [{
    id: 'general',
    label: 'General',
    icon: <Settings size={20} />
  }, {
    id: 'users',
    label: 'Users & Permissions',
    icon: <User size={20} />
  }, {
    id: 'notifications',
    label: 'Notifications',
    icon: <Bell size={20} />
  }, {
    id: 'security',
    label: 'Security',
    icon: <Shield size={20} />
  }, {
    id: 'email',
    label: 'Email',
    icon: <Mail size={20} />
  }, {
    id: 'billing',
    label: 'Billing',
    icon: <CreditCard size={20} />
  }, {
    id: 'backup',
    label: 'Backup',
    icon: <Database size={20} />
  }];
  return <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">System Settings</h1>
      </div>
      <div className="bg-white rounded-lg shadow-sm">
        <div className="border-b">
          <div className="flex overflow-x-auto">
            {tabs.map(tab => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`flex items-center px-6 py-4 border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id ? 'border-navy-900 text-navy-900' : 'border-transparent text-gray-500 hover:text-navy-900'}`}>
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>)}
          </div>
        </div>
        <div className="p-6">
          {activeTab === 'general' && <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Club Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Club Name
                    </label>
                    <input type="text" defaultValue="Subic Bay Yacht Club" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">
                      Contact Email
                    </label>
                    <input type="email" defaultValue="info@sbyc.ph" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone</label>
                    <input type="tel" defaultValue="+63 (47) 252-3000" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Address</label>
                    <input type="text" defaultValue="Waterfront Road, Subic Bay Freeport Zone" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  System Preferences
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-700">
                        Maintenance Mode
                      </p>
                      <p className="text-sm text-gray-500">
                        Enable maintenance mode to prevent user access
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-900/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-900"></div>
                    </label>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-700">Debug Mode</p>
                      <p className="text-sm text-gray-500">
                        Enable detailed error reporting
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-navy-900/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-navy-900"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>}
          {/* Add other tab content here */}
          <div className="mt-6 flex justify-end space-x-4">
            <button className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
              Cancel
            </button>
            <button onClick={handleSave} disabled={isLoading} className="px-4 py-2 bg-navy-900 text-white rounded-md hover:bg-navy-800 transition-colors disabled:opacity-50">
              {isLoading ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </div>
      </div>
    </div>;
};
import React from 'react';
import { Bell, Search, Settings, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
interface AdminHeaderProps {
  onMenuClick: () => void;
}
export const AdminHeader = ({
  onMenuClick
}: AdminHeaderProps) => {
  const navigate = useNavigate();
  return <header className="fixed top-0 right-0 left-0 lg:left-64 h-16 bg-white border-b z-30">
      <div className="flex items-center justify-between h-full px-4 lg:px-6">
        <div className="flex items-center space-x-4">
          <button onClick={onMenuClick} className="p-2 hover:bg-gray-100 rounded-lg lg:hidden">
            <Menu size={24} className="text-gray-600" />
          </button>
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-navy-900/20 w-64" />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Bell size={20} className="text-gray-600" />
          </button>
          <button onClick={() => navigate('/admin/settings')} className="p-2 hover:bg-gray-100 rounded-lg">
            <Settings size={20} className="text-gray-600" />
          </button>
          <div className="flex items-center space-x-3 border-l pl-4">
            <div className="w-8 h-8 rounded-full bg-navy-900 text-white flex items-center justify-center font-medium">
              A
            </div>
            <div className="hidden sm:block text-sm">
              <p className="font-medium text-gray-700">Admin User</p>
              <p className="text-gray-500">admin@sbyc.ph</p>
            </div>
          </div>
        </div>
      </div>
    </header>;
};
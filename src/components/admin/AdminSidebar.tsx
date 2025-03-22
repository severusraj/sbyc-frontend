import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { useToast } from '../../hooks/useToast';
import { LayoutDashboard, Users, Calendar, FileText, Image, Ship, Settings, LogOut, X, CreditCard } from 'lucide-react';
interface AdminSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}
const menuItems = [{
  name: 'Dashboard',
  path: '/admin',
  icon: <LayoutDashboard size={20} />
}, {
  name: 'Members',
  path: '/admin/members',
  icon: <Users size={20} />
}, {
  name: 'Reservations',
  path: '/admin/reservations',
  icon: <Calendar size={20} />
}, {
  name: 'Billing',
  path: '/admin/billing',
  icon: <CreditCard size={20} />
}, {
  name: 'Content',
  path: '/admin/content',
  icon: <FileText size={20} />
}, {
  name: 'Media',
  path: '/admin/media',
  icon: <Image size={20} />
}, {
  name: 'Facilities',
  path: '/admin/facilities',
  icon: <Ship size={20} />
}, {
  name: 'Settings',
  path: '/admin/settings',
  icon: <Settings size={20} />
}];
export const AdminSidebar = ({
  isOpen,
  onClose
}: AdminSidebarProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const {
    adminLogout
  } = useAdminAuth();
  const {
    showToast
  } = useToast();
  const handleLogout = () => {
    adminLogout();
    showToast('Successfully logged out', 'success');
    navigate('/admin/login');
  };
  return <aside className={`fixed left-0 top-0 h-screen w-64 bg-white border-r z-30 transform transition-transform duration-200 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex items-center justify-between h-16 px-6 border-b">
        <Link to="/admin" className="text-xl font-bold text-navy-900">
          SBYC Admin
        </Link>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg lg:hidden">
          <X size={20} className="text-gray-600" />
        </button>
      </div>
      <nav className="p-4">
        <ul className="space-y-1">
          {menuItems.map(item => <li key={item.path}>
              <Link to={item.path} onClick={onClose} className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${location.pathname === item.path ? 'bg-navy-900 text-white' : 'text-gray-600 hover:bg-gray-100'}`}>
                {item.icon}
                <span>{item.name}</span>
              </Link>
            </li>)}
        </ul>
        <div className="border-t mt-4 pt-4">
          <button onClick={handleLogout} className="flex items-center space-x-3 text-red-600 hover:bg-red-50 w-full px-4 py-3 rounded-lg transition-colors">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </nav>
    </aside>;
};
import React, { useState } from 'react';
import { MenuIcon, UserIcon, ChevronDown, LogOut, ChevronLeft, Calendar, Settings, Bell } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useToast } from '../hooks/useToast';
interface NavigationProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}
const navItems = [{
  name: 'Home',
  path: '/'
}, {
  name: 'Hotel',
  path: '/hotel'
}, {
  name: 'Dining',
  path: '/dining'
}, {
  name: 'Events',
  path: '/events'
}, {
  name: 'Facilities',
  path: '/facilities'
}, {
  name: 'Marina',
  path: '/marina'
}, {
  name: 'Membership',
  path: '/membership'
}, {
  name: 'Reciprocal Clubs',
  path: '/reciprocal-clubs'
}];
const memberItems = [{
  name: 'Dashboard',
  path: '/member/dashboard',
  icon: <ChevronLeft size={16} />,
  description: 'Return to member dashboard'
}, {
  name: 'Reservations',
  path: '/member/reservations',
  icon: <Calendar size={16} />,
  description: 'View and manage your bookings'
}, {
  name: 'Notifications',
  path: '/member/notifications',
  icon: <Bell size={16} />,
  description: 'Check your notifications'
}, {
  name: 'Settings',
  path: '/member/settings',
  icon: <Settings size={16} />,
  description: 'Manage your account'
}];
export const Navigation = ({
  isLoggedIn,
  setIsLoggedIn
}: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showMemberMenu, setShowMemberMenu] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    showToast
  } = useToast();
  const isMemberRoute = location.pathname.startsWith('/member');
  const isActive = (path: string) => location.pathname === path;
  const shouldShowNavItems = !isMemberRoute || !isLoggedIn;
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      if (loginForm.email === 'member@example.com' && loginForm.password === 'password123') {
        setIsLoggedIn(true);
        showToast('Welcome back!', 'success');
        setShowLoginModal(false);
        setLoginForm({
          email: '',
          password: ''
        });
        navigate('/');
      } else {
        showToast('Invalid credentials. Please try the demo account.', 'error');
      }
    } catch (error) {
      showToast('Login failed. Please try again.', 'error');
    } finally {
      setIsLoading(false);
    }
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast('Successfully logged out', 'success');
    navigate('/');
    setShowMemberMenu(false);
  };
  return <>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-[100] shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-8">
              <Link to="/" className="text-2xl font-semibold text-navy-900">
                SBYC
              </Link>
              {isLoggedIn && isMemberRoute && <Link to="/" className="hidden md:flex items-center space-x-2 text-navy-900 hover:text-navy-800 bg-gray-100 px-4 py-2 rounded-md">
                  <ChevronLeft size={16} />
                  <span>Back to Home</span>
                </Link>}
            </div>
            <div className="hidden md:flex items-center space-x-6">
              {shouldShowNavItems && navItems.map(item => <Link key={item.name} to={item.path} className={`${isActive(item.path) ? 'text-navy-900 font-semibold' : 'text-gray-600'} hover:text-navy-900 transition-colors`}>
                    {item.name}
                  </Link>)}
              {isLoggedIn && <div className="relative">
                  <button onClick={() => setShowMemberMenu(!showMemberMenu)} className="flex items-center space-x-2 bg-navy-900 text-white px-4 py-2 rounded-md hover:bg-navy-800 transition-colors">
                    <UserIcon size={18} />
                    <span>Member Menu</span>
                    <ChevronDown size={16} className={`transform transition-transform ${showMemberMenu ? 'rotate-180' : ''}`} />
                  </button>
                  {showMemberMenu && <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2 border">
                      {memberItems.map(item => <Link key={item.name} to={item.path} className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 group" onClick={() => setShowMemberMenu(false)}>
                          <div className="text-gray-500 group-hover:text-navy-900 mt-0.5">
                            {item.icon}
                          </div>
                          <div>
                            <div className="text-gray-900 font-medium">
                              {item.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {item.description}
                            </div>
                          </div>
                        </Link>)}
                      <div className="border-t my-2" />
                      <button onClick={handleLogout} className="flex items-center space-x-3 w-full px-4 py-3 text-red-600 hover:bg-red-50">
                        <LogOut size={16} />
                        <div>
                          <div className="font-medium">Sign Out</div>
                          <div className="text-sm text-gray-500">
                            End your current session
                          </div>
                        </div>
                      </button>
                    </div>}
                </div>}
              {!isLoggedIn && <button onClick={() => setShowLoginModal(true)} className="flex items-center space-x-2 bg-navy-900 text-white px-4 py-2 rounded-md hover:bg-navy-800 transition-colors">
                  <UserIcon size={18} />
                  <span>Exclusive Member Access</span>
                </button>}
            </div>
            <button className="md:hidden text-gray-600 hover:text-gray-900" onClick={() => setIsOpen(!isOpen)}>
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
          {isOpen && <div className="md:hidden py-4 border-t">
              {isLoggedIn && isMemberRoute && <Link to="/" className="flex items-center space-x-2 text-navy-900 hover:text-navy-800 px-4 py-2 mb-2 bg-gray-100 rounded-md" onClick={() => setIsOpen(false)}>
                  <ChevronLeft size={16} />
                  <span>Back to Home</span>
                </Link>}
              {shouldShowNavItems && <div className="space-y-1">
                  {navItems.map(item => <Link key={item.name} to={item.path} className={`block px-4 py-2 rounded-md ${isActive(item.path) ? 'text-navy-900 font-semibold bg-gray-100' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setIsOpen(false)}>
                      {item.name}
                    </Link>)}
                </div>}
              {isLoggedIn && <div className="mt-4 pt-4 border-t">
                  <div className="px-4 mb-2 text-sm font-medium text-gray-500">
                    Member Menu
                  </div>
                  {memberItems.map(item => <Link key={item.name} to={item.path} className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-50" onClick={() => setIsOpen(false)}>
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>)}
                  <button onClick={handleLogout} className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 hover:bg-red-50 mt-2">
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </div>}
              {!isLoggedIn && <div className="mt-4 px-4">
                  <button onClick={() => {
              setShowLoginModal(true);
              setIsOpen(false);
            }} className="flex items-center justify-center space-x-2 w-full bg-navy-900 text-white px-4 py-2 rounded-md hover:bg-navy-800 transition-colors">
                    <UserIcon size={18} />
                    <span>Exclusive Member Access</span>
                  </button>
                </div>}
            </div>}
        </div>
      </nav>
      {showLoginModal && <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-md w-full mx-4">
            <h2 className="text-2xl font-bold text-navy-900 mb-6">
              Member Login
            </h2>
            <div className="mb-6 p-4 bg-gray-50 rounded-md">
              <p className="text-sm text-gray-600 font-medium mb-2">
                Demo Account:
              </p>
              <p className="text-sm text-gray-600">Email: member@example.com</p>
              <p className="text-sm text-gray-600">Password: password123</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input type="email" value={loginForm.email} onChange={e => setLoginForm({
              ...loginForm,
              email: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" placeholder="Enter your email" disabled={isLoading} />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Password</label>
                <input type="password" value={loginForm.password} onChange={e => setLoginForm({
              ...loginForm,
              password: e.target.value
            })} className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-navy-900/20" placeholder="Enter your password" disabled={isLoading} />
              </div>
              <button type="submit" disabled={isLoading} className="w-full bg-navy-900 text-white py-2 rounded-md hover:bg-navy-800 transition-colors disabled:opacity-50">
                {isLoading ? 'Logging in...' : 'Login'}
              </button>
            </form>
            <button onClick={() => setShowLoginModal(false)} className="mt-4 text-gray-600 hover:text-gray-800 transition-colors" disabled={isLoading}>
              Cancel
            </button>
          </div>
        </div>}
    </>;
};
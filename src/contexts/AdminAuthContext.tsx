import React, { useState, createContext, useContext } from 'react';
interface AdminAuthContextType {
  isAdminAuthenticated: boolean;
  adminLogin: (email: string, password: string) => Promise<void>;
  adminLogout: () => void;
}
const AdminAuthContext = createContext<AdminAuthContextType | undefined>(undefined);
export const AdminAuthProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const adminLogin = async (email: string, password: string) => {
    // Demo login - in production, this would be an API call
    if (email === 'admin@sbyc.ph' && password === 'admin123') {
      setIsAdminAuthenticated(true);
    } else {
      throw new Error('Invalid credentials');
    }
  };
  const adminLogout = () => {
    setIsAdminAuthenticated(false);
  };
  return <AdminAuthContext.Provider value={{
    isAdminAuthenticated,
    adminLogin,
    adminLogout
  }}>
      {children}
    </AdminAuthContext.Provider>;
};
export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (context === undefined) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};
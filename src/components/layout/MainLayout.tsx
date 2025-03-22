import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../Navigation';
interface MainLayoutProps {
  isLoggedIn: boolean;
  setIsLoggedIn: (value: boolean) => void;
}
export const MainLayout = ({
  isLoggedIn,
  setIsLoggedIn
}: MainLayoutProps) => {
  return <>
      <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Outlet />
    </>;
};
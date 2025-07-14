import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export function PrivateRoute() {
  const { isAuthenticated, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    // Still verifying token—show a spinner or message
    return <div>Loading authentication status…</div>;
  }

  // If logged in, render child routes; otherwise redirect to /login
  return isAuthenticated ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      replace
      state={{ from: location }} // remember original page
    />
  );
}
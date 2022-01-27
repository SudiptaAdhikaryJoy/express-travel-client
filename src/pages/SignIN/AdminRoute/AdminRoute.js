import { RefreshIcon } from '@heroicons/react/outline';
import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const AdminRoute = ({ children }) => {
    const { user, admin, isLoading } = useAuth();
    const location = useLocation();

    if (isLoading) {
        return <div className="flex justify-center"><RefreshIcon className="h-20 w-20 text-yellow-600 animate-spin" aria-hidden="true" /></div>
    }

    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} />
};

export default AdminRoute;
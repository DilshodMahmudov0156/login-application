import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

function ProtectedRoute() {
    const userToken = localStorage.getItem('userId');
    return (
        userToken? <Outlet/>: <Navigate to="/"/>
    );
}

export default ProtectedRoute;
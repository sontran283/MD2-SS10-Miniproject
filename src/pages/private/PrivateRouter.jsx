import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export default function PrivateRouter() {
    const isLogin = true;  // mac dinh da dang nhap roi

    return isLogin ? <Outlet /> : (<Navigate to={"/login"} />)
}

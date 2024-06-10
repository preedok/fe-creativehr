import React, { useEffect, useState } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import Login from "../views/auth/login";
import Register from "../views/auth/register";
import Dashboard from "../views/admin/dashboard/dashboard";
import Materi from "../views/admin/materi/materi";
import Layout from "../layout/layout";
import Search from '../views/admin/search/search'

// /////////////////////////////////////////////
import Landingpage from '../views/landing/landing'
// Scroll to Top when switching page
const ScrollToTop = ({ children }) => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return children;
};
// Private routing
const Auth = ({ children }) => {
    const token = localStorage.getItem("token");
    if (!token) {
        // swal({
        //     title: "Denied!",
        //     text: `Access Denied, Please Login!`,
        //     icon: "error",
        // });
        return <Navigate to="/login" replace />;
    }
    return children;
};
const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    {/* Auth Routes  */}
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Main Routes */}
                    <Route path="/dashboard" element={<Layout />}>
                        <Route index element={<Dashboard />} />
                    </Route>
                    {/* <Route path="/dashboard" element={<Layout />}>
                        <Route index element={<Auth><Dashboard /></Auth>} />
                    </Route> */}
                    <Route path="/materi" element={<Layout />}>
                        <Route index element={<Materi />} />
                    </Route>
                    {/* <Route
                        path="/"
                        element={token ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
                    /> */}
                    <Route path="/search" element={<Layout />}>
                        <Route index element={<Auth> <Search /> </Auth>} />
                    </Route>
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default Router;
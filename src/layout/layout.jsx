import React, { useState, useEffect } from "react";
import Sidebar from "../components/navbar/Navigation.jsx";
import { Outlet } from "react-router-dom";

const Layout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    useEffect(() => {
        const checkScreenSize = () => {
            if (window.innerWidth < 768) { 
                setIsSidebarOpen(false);
            } else {
                setIsSidebarOpen(true);
            }
        };
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
    return (
        <div className="flex h-screen">
            <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
            <div className={`flex-1 ${isSidebarOpen ? "sm:ml-52 transition-all duration-500 ease-out" : "sm:ml-9 transition-all duration-500 ease-out"} flex flex-col overflow-hidden p-2 overflow-y-auto`}>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;

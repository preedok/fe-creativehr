import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router";
import Swal from 'sweetalert2';
import api from '../../service/api'
import { StartLoading } from "../../utils/swal2";
import { isAuth, setAuth } from "../../utils/token";
import { useFormik } from "formik";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextField, IconButton } from "@mui/material";
import { Helmet } from "react-helmet";
import style from './style.module.css'
import { FaUser, FaLock } from 'react-icons/fa';
import logo1 from '../../assets/login1.svg'
import logo2 from '../../assets/header.gif'
import * as Yup from "yup";
const Register = () => {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('/login')
    }
    return (
        <>
            <Helmet>
                <title>Creative HR | Login</title>
            </Helmet>
            <div className={`flex flex-col lg:flex-row h-screen`}>
                {/* Bagian kanan - Form login */}
                <div className="w-full lg:w-1/2 container flex flex-col items-center justify-center p-8 lg:p-0">
                    <div className="absolute top-0 left-0">
                        <img src={logo} style={{ width: '220px', height: '190px' }} alt="" />
                        <h2 className="px-[60px] mt-[-40px] text-2xl lg:text-3xl font-bold mb-4 text-[#8b9679]">Register to your Account</h2>
                    </div>
                    <div className="w-full max-w-md mt-[190px]">
                        <form className="rounded-[20px] px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                                        <FaUser />
                                    </span>
                                    <input
                                        className="shadow appearance-none border rounded-full w-full py-4 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="fullname"
                                        type="text"
                                        placeholder="Fullname"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                                        <FaUser />
                                    </span>
                                    <input
                                        className="shadow appearance-none border rounded-full w-full py-4 pl-10 pr-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="username"
                                        type="text"
                                        placeholder="Username"
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-4 mt-[-15px] flex items-center text-gray-500">
                                        <FaLock />
                                    </span>
                                    <input
                                        className="shadow appearance-none border rounded-full w-full py-4 pl-10 pr-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 pl-4 mt-[-15px] flex items-center text-gray-500">
                                        <FaLock />
                                    </span>
                                    <input
                                        className="shadow appearance-none border rounded-full w-full py-4 pl-10 pr-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                        id="password"
                                        type="password"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                            </div>
                           
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-[#feba5b] hover:bg-blue-700 w-full text-white font-bold py-4 px-[60px] rounded-full focus:outline-none focus:shadow-outline"
                                    type="button"
                                    onClick={handleRegister}
                                >
                                    Register
                                </button>
                            </div>
                            <div className="mt-4 text-center">
                                <p style={{ fontSize: '13px', color: '#496989' }}>Don't have account? <span className="text-blue-500">Login</span></p>
                            </div>
                            <p className="text-center mt-5 text-gray-500 text-xs absolute bottom-0 left-0 px-4 mb-4 font-bold">
                                &copy;{new Date().getFullYear()} PT CREATIVE AND TRAINING DEVELOPMENT
                            </p>
                        </form>
                    </div>
                </div>

                {/* Bagian kiri - Warna biru (hidden di mobile) */}
                <div className="hidden lg:flex lg:w-1/2 container bg-[#feba5b] items-center justify-center p-8 lg:p-0">
                    <img src={logo2} alt="" style={{ borderRadius: '30px' }} />
                </div>
            </div>

        </>

    );
};

export default Register;

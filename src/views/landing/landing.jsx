import React, { useState, useEffect } from 'react';
import { Helmet } from "react-helmet";
import Navbar from './components/Navbar';
import Header from './components/Header'
import About from './components/About';
import Footer from './components/Footer';
import Founder from './components/Founder';
import Blog from './components/Blog';

const Landing = () => {
    return (
        <>
            <Helmet>
                <title>Creative HR | Home</title>
            </Helmet>
            <Navbar />
            <section className='mx-14'>
                <Header />
                <About />
                <Founder/>
                <Blog/>
                <Footer />
            </section>
        </>
    );
}

export default Landing;


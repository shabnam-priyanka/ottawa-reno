import Head from 'next/head';
import React from 'react';
import About from '../components/Home/About';
import Navbar from '../components/ShareComponent/Navbar';

const aboutUs = () => {
    return (
        <div>
            <Head>
                <title>Ottawa-Reno || About Us</title>
            </Head>
            <Navbar background="gray"/>
            <About/>
        </div>
    );
};

export default aboutUs;
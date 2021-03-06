import Head from 'next/head';
import React from 'react';
import OurServices from '../components/ourServices/OurServices';
import Navbar from '../components/ShareComponent/Navbar';

const ourServices = () => (
    <div>
        <Head>
            <title>Ottawa-Reno || our services page</title>
        </Head>
        <Navbar background="#3e3e3e" />
        <OurServices />
    </div>
);

export default ourServices;

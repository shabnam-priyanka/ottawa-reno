import Head from 'next/head';
import React from 'react';
import ContactUs from '../components/Home/ContactUs';
import Navbar from '../components/ShareComponent/Navbar';

const contactUs = () => {
    return (
        <div>
            <Head>
                <title>Ottawa-Reno || Contact page</title>
            </Head>
            <Navbar background="gray"/>
            <ContactUs />
        </div>
    );
};

export default contactUs;
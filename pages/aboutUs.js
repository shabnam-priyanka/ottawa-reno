import React from 'react';
import About from '../components/Home/About';
import Navbar from '../components/ShareComponent/Navbar';

const aboutUs = () => {
    return (
        <div>
            <Navbar background="gray"/>
            <About/>
        </div>
    );
};

export default aboutUs;
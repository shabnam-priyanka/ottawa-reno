import React from 'react';
import Navbar from '../ShareComponent/Navbar';

const Header = () => {
    const hello = 5;
    return (
        <div className="header-area ">
            <Navbar background="rgba(255, 255, 255, 0)" />
            <div className="header-content-area  text-right">
            <header className="container-xl">
                <div className="row">
                    <div className="col-md-3 p-0"></div>
                    <div className="col-md-9">
                        <h1 className="header-main-content text-truncate">Ottawa-Reno </h1>
                        <h5 className="header-main-title"> Best quality & trust! </h5>
                        {/* <img
                            className="img-fluid"
                            src="https://static.wixstatic.com/media/2af8e1_0facbe1190cf4810929163b23a239f1d~mv2.png/v1/fill/w_518,h_413,al_c,q_85,usm_0.66_1.00_0.01/FullColor-TransparentBg-1280x1024-72dpi_.webp"
                            alt="img"
                        /> */}
                    </div>
                </div>
            </header>
                </div>
        </div>
    );
};

export default Header;

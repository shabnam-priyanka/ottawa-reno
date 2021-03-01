import React from "react";
import Head from "next/head";
import Navbar from "./ShareComponent/Navbar";
import Footer from "./ShareComponent/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Ottawa-Reno</title>
      </Head>
      <Navbar />
      {children}

      <h1>This is reegekfg</h1>

      <Footer />
    </div>
  );
};

export default Layout;

import Head from 'next/head';
import BookOnline from '../components/bookOnline/BookOnline';
import Navbar from '../components/ShareComponent/Navbar';

const bookOnline = () => {
    
    return (
        <div style={{ background: "#808080" }}>
            <Head>
                <title>Ottawa-Reno || book online page</title>
            </Head>
            <Navbar background="gray" />
            <BookOnline />
        </div>
    )

};

export default bookOnline;

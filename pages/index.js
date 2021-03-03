import About from '../components/Home/About';
import ContactUs from '../components/Home/ContactUs';
import Header from '../components/Home/Header';
import Renovations from '../components/Home/Renovations';

export default function Home() {
    return (
        <>
            <Header />
            <About />
            <Renovations />
            <ContactUs/>
        </>
    );
}

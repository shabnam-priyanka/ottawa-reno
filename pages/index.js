import About from '../components/Home/About';
import Header from '../components/Home/Header';
import Renovations from '../components/Home/Renovations';

export default function Home() {
    return (
        <div>
            <Header />
            <About />
            <Renovations />
            <h1>This is home</h1>
        </div>
    );
}

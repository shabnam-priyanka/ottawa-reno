import Link from 'next/link';

const Navbar = ({ background }) => (
    <div className="navbar-bg">
        <nav style={{ background }} className="navbar navbar-expand-lg navbar-light">
            <a className="navbar-brand" href="#">
                <img src="/reno.jpg" alt="" className="logo img-fluid" />
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse  justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">
                                Home <span className="sr-only">(current)</span>
                            </a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/aboutUs">
                            <a className="nav-link">About Us</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/ourServices">
                            <a className="nav-link">Our Services</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/">
                            <a className="nav-link">Our Work</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/bookOnline">
                            <a className="nav-link">Book Online</a>
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link href="/contactUs">
                            <a className="nav-link">Contact Us</a>
                        </Link>
                        <span className="navNumber">613-413-7941 </span>

                        {/* FACEBOOK icon */}
                        {/* <Link href="/contactUs">
                       <a><img src="/facebook.png" alt="" className='facebook'/></a> 
                        </Link> */}
                    </li>
                </ul>
            </div>
        </nav>
    </div>
);
export default Navbar;

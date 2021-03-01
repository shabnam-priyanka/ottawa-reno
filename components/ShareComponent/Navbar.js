import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        {/* <a class="navbar-brand" href="#">Navbar</a> */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse  justify-content-end" id="navbarNav">
          <ul class="navbar-nav">

            <li class="nav-item active">
              <Link href="/">
                <a class="nav-link">Home <span class="sr-only">(current)</span></a>
              </Link>
            </li>

            <li class="nav-item">
              <Link href="/">
                <a class="nav-link">About Us</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link href="/ourServices">
                <a class="nav-link">Our Services</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link href="/">
                <a class="nav-link">Our Work</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link href="/bookOnline">
                <a class="nav-link">Book Online</a>
              </Link>
            </li>

            <li class="nav-item">
              <Link href="/">
                <a class="nav-link">Contact Us</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

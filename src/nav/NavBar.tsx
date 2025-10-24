import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MEDHAT مدحت</Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/arabic">Arabic</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/english">English</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link mx-2" to="/cooking">Cooking</Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link mx-2 dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            > Other</a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink" >
              <li><Link className="dropdown-item" to="/archives">Archives</Link></li>
              <li><Link className="dropdown-item" to="/church">Church</Link></li>
              <li><Link className="dropdown-item" to="/handyman">Handyman</Link></li>                  
              <li><a className="dropdown-item" href="/mvp">MVP</a></li>
              <li><a className="dropdown-item" href="recruiters.html">Recruiters</a></li>
              <li><Link className="dropdown-item" to="/travel">Travel</Link></li>
              <li><Link className="dropdown-item" to="/tv">TV</Link></li>
              <li><Link className="dropdown-item" to="/video">Video</Link></li>
              <li><Link className="dropdown-item" to="/music">Music</Link></li>
              <li><Link className="dropdown-item" to="/images">Images</Link></li>
              <li><Link className="dropdown-item" to="/events-calendar">Events</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
  );
};

export default NavBar;

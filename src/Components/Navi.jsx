import { Outlet, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navi() {
  return (
    <nav>
        <ul>
            <li><Link to="/">home</Link></li>
            <li><Link to="/about">about</Link></li>
            <li><Link to="/contacts">contacts</Link></li>
        </ul>
    </nav>
  );
}

export default Navi



export const Navi2 = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link to="/" className="navbar-brand">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle Navi"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contacts" className="nav-link">
              Contacts
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
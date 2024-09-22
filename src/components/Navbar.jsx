import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../state/DataContext";
import "./Navbar.css";

function Navbar() {
  // Access the user from the context
  const { user } = useContext(DataContext);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          coolRockStore
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Catalog"
              >
                Catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Admin">
                Admin
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/Contact"
              >
                Contact
              </Link>
            </li>
          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Lookin' for something?"
              aria-label="Search"
            />
            <button className="btn btn-light" type="submit">
              Search
            </button>
          </form>

          {user && <div className="navbar-text">Welcome, {user.name}!</div>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

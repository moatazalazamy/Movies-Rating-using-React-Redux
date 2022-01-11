import React,{useContext} from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import ChangeLanguage from "./ChangeLanguage";
const Navbar = () => {
  const favorites = useSelector((state) => state.favorites);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Home
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/movie"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favourites">
                  Favourites {favorites}
                </Link>
              </li>
              <li className="nav-item">
                  <ChangeLanguage />
              </li>
              <li
                className="ms-auto"
                style={{ position: "absolute", right: "100px", padding: "0px" }}
              >
            
                <button>
                  <Link className="nav-link" to="/signup">
                    Signup
                  </Link>
                </button>
              </li>
              <li
                style={{ position: "absolute", right: "20px", padding: "0px" }}
              >
                <button>
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </button>
                
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

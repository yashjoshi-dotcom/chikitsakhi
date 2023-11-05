import React from "react"
import './Style.css'; 

const Navbar = () => {
    return (
<header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a href="#" className="navbar-brand p-3">
            Chikitsakhi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="d-flex justify-content-center collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav w-75 mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  ChatBot
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form className="form-inline my-2 pr-3 my-lg-0">
              <button className="btn menu-right-btn border" type="submit">
                Request A Chat
              </button>
            </form>
          </div>
        </nav>
      </header>
      );
    };
    
    export default Navbar;
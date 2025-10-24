import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear all authentication data
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userProfile');
    // Redirect to login page
    navigate('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container-fluid px-4">
        {/* Left - Logo */}
        <Link className="navbar-brand fw-bold" to="/home">
          <i className="bi bi-heart-fill text-danger me-2"></i> LifeGift
        </Link>

        {/* Center - Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <Link className="nav-link fw-bold" to="/profile">Profile</Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link fw-bold" to="/donation">Donation</Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link fw-bold" to="/collection">Collection</Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link fw-bold" to="/features">Features</Link>
            </li>

            <li className="nav-item mx-3">
              <Link className="nav-link fw-bold" to="/authority">Authority</Link>
            </li>
          </ul>
        </div>

        {/* Right - Logout */}
        <div className="d-flex">
          <button className="btn btn-primary" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right me-1"></i> Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
import React from "react";
import { Link, Router } from "react-router-dom";
import styles from "../scss/navbar.scss";
import LocalBarIcon from '@mui/icons-material/LocalBar';


/**
 * Routes users to different pages based on the link clicked including homepage for clicking the app name (barcart).
 */
export default function Navbar() {
  return (
    <div className="navbar navbar-container">
      <Link to="/" className="app-title">
        <LocalBarIcon /> Barcart
      </Link>
      <ul className="nav-menu">
        <li className="nav-item">
          <Link to="listPlaceholder" className="nav-link">
            Shopping List
          </Link>
        </li>
        <li className="nav-item">
          <Link to="cocktails" className="nav-link">
            Cocktails
          </Link>
        </li>
        <li className="nav-item">
          <Link to="userbar" className="nav-link">
            User Bar
          </Link>
        </li>
      </ul>
    </div>
  );
}

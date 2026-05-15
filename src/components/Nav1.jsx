import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import catImage from '../assets/cat.jpg';

function Nav1() {

  const location = useLocation();

  return (
    <nav className="primary-nav">
      <div className="logo">
        <h2>DevLore</h2>
      </div>
      <ul className="pages">
        <li>
          <Link 
            to="/" 
            className={`page ${location.pathname === "/" ? "active" : ""}`} 
            onClick={() => setActivePage("/")}>
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/dashboard" 
            className={`page ${location.pathname === "/dashboard" ? "active" : ""}`} 
            onClick={() => setActivePage("/dashboard")}>
            Dashboard
          </Link>
        </li>
        <li>
          <Link 
            to="/quizsetup" 
            className={`page ${location.pathname === "/quizsetup" ? "active" : ""}`} 
            onClick={() => setActivePage("/quizsetup")}>
            Quiz Setup
          </Link>
        </li>
      </ul>
      <div className="settings">
        <div className="profile-name">rocks_d_rahul</div>
        <img src={catImage} alt="profile-pic" className="profile-pic" />
      </div>
    </nav>
  );
}

export default Nav1;
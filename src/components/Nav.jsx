import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import catImage from '../assets/cat.jpg';

function Nav() {

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
            className={`page ${location.pathname === "/" ? "active" : ""}`} >
            Home
          </Link>
        </li>
        <li>
          <Link 
            to="/quests" 
            className={`page ${location.pathname === "/quests" ? "active" : ""}`} >
            Quests
          </Link>
        </li>
        <li>
          <Link 
            to="/leaderboard" 
            className={`page ${location.pathname === "/leaderboard" ? "active" : ""}`} >
            Leaderboard
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

export default Nav;
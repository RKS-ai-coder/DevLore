import React from 'react'
import { useNavigate } from "react-router-dom";
import homeImg from '../assets/home.png';

const Header = () => {

  const navigate = useNavigate();

  return (
    <header>
      <div className="header-content">
        <h1 className="title-1">Master the Trivia.</h1>
        <h1 className="title-2">Level Up Your Mind.</h1>
        <div className="header-para">Join the elite ranks of the Devlore. Embar on knowledge quests across science, history, and pop culture. Earn XP and dominate the gloabal leaderboards</div>
        <button className="start-trivia" onClick={() => navigate("/quests")}>Start Trivia</button>
      </div>
      <div className="header-img">
        <img src={homeImg} alt="header-image" />
      </div>
    </header>
  )
}

export default Header

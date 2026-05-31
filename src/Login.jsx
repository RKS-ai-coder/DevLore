import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Storage from './utils/Storage';

const Login = () => {
const [username, setUsername] = useState('');
const navigate = useNavigate();

const handleLogin = (e) => {
  e.preventDefault();
  if (!username.trim()) return alert("Please claim a valid username!");

  const cleanName = username.trim();
  const allUsers = Storage.get("leaderboardUsers") || [];
  
  let userProfile = allUsers.find(u => u.username.toLowerCase() === cleanName.toLowerCase());

  if (!userProfile) {
    userProfile = {
      username: cleanName,
      xp: 0,
      level: 1,
      createdAt: new Date().toLocaleDateString()
    };
    allUsers.push(userProfile);
    Storage.set("leaderboardUsers", allUsers);
  }

  Storage.set("currentUser", userProfile);
  navigate("/"); 
};

return (
  <div className="login-screen-wrapper">
    <form onSubmit={handleLogin} className="login-card">
      <h2>Enter the DevLore</h2>
      <p>Track your level status and compete on global rank boards</p>
      <input 
        type="text" 
        placeholder="Enter username..." 
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        maxLength={14}
      />
      <button type="submit" className="login-btn">Initialize Session</button>
    </form>
  </div>
);
};

export default Login;
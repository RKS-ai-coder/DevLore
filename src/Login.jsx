import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Storage from './utils/Storage';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    const cleanName = username.trim();
    if (!cleanName) return alert("Please enter a valid name!");

    // local user accounts directory
    const allUsers = Storage.get("leaderboardUsers") || [];
    
    // Scan to see if this profile name structure is already claimed
    let userProfile = allUsers.find(
      (u) => u.username.toLowerCase() === cleanName.toLowerCase()
    );

    if (!userProfile) {
      // Creating a clean profile if it's a completely unique username
      userProfile = {
        username: cleanName, 
        xp: 0,
        level: 1,
        createdAt: new Date().toLocaleDateString()
      };
      
      // Append the fresh record into the registry and save back to storage
      allUsers.push(userProfile);
      Storage.set("leaderboardUsers", allUsers);
    }

    // active login session is set to the profile found or created above
    Storage.set("currentUser", userProfile);
    
    // Head over to home and refresh to force downstream layout updates
    navigate("/"); 
    window.location.reload();
  };

  return (
    <div className="login-screen-wrapper">
      <form onSubmit={handleLogin} className="login-card">
        <h2>Enter the DevLore</h2>
        <p>Track your level status and compete on global rank boards</p>
        <input 
          type="text" 
          placeholder="Enter unique username..." 
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
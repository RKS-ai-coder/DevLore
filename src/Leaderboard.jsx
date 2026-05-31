import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Storage from "./utils/Storage";
import rank1 from './assets/rank1.png';
import rank2 from './assets/rank2.png';
import rank3 from './assets/rank3.png';
import trophy from './assets/trophy.png';

const Leaderboard = () => {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    const records = Storage.get("leaderboardUsers") || [];

    const sorted = [...records].sort((a, b) => {
      if (b.level !== a.level) return b.level - a.level;
      return b.xp - a.xp;
    });

    setRankings(sorted);
  }, []);

  return (
    <>
      <Nav />
      <main className="leaderboard-page" style={{ minHeight: '75vh', padding: '40px 0' }}>
        <div className="leaderboard-container">
          <div className="leaderboard-header">
            <img src={trophy} alt="Trophy Icon" className="leaderboard-header-img" /> 
            <h2>Rankings</h2>
            <p>Compete for the highest level and total XP execution records inside the realm</p>
          </div>

          <div className="leaderboard-list">
            {rankings.map((user, index) => {
              const placementRank = index + 1;
              let tierClass = placementRank === 1 ? "gold" : placementRank === 2 ? "silver" : placementRank === 3 ? "bronze" : "";

              return (
                <div key={user.username} className={`leaderboard-row ${tierClass}`}>
                  <div className="rank-section">
                    <span className="rank-number">
                      {placementRank === 1 ? (
                        <img src={rank1} alt="Rank 1 Medal" className="leaderboard-rank-img" />
                      ) : placementRank === 2 ? (
                        <img src={rank2} alt="Rank 2 Medal" className="leaderboard-rank-img" />
                      ) : placementRank === 3 ? (
                        <img src={rank3} alt="Rank 3 Medal" className="leaderboard-rank-img" />
                      ) : (
                        `#${placementRank}`
                      )}
                    </span>
                    <span className="player-username">{user.username}</span>
                  </div>

                  <div className="metrics-section">
                    <span className="leaderboard-level-tag">LVL {user.level}</span>
                    <span className="leaderboard-xp-display">{user.xp} XP</span>
                  </div>
                </div>
              );
            })}
            
            {rankings.length === 0 && (
              <p className="empty-leaderboard-text">No quiz adventurers logged in this arena footprint yet.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Leaderboard;

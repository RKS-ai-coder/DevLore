import React, { useState, useEffect } from 'react';
import Storage from '../utils/Storage'; 
import category from '../assets/category.png'
import average from '../assets/average.png';
import quest from '../assets/quest.png';

const Stats = () => {
  const [playerInfo, setPlayerInfo] = useState({ level: 1, xp: 0 });
  const [stats, setStats] = useState({
    questsCompleted: 0,
    averageScore: '0.0',
    bestCategory: 'None'
  });

  useEffect(() => {

    const currentUser = Storage.get("currentUser");

    if (currentUser) {
      setPlayerInfo({
        level: currentUser.level || 1,
        xp: currentUser.xp || 0
      });
    }

    const historyKey = currentUser ? `quizHistory_${currentUser.username.toLowerCase()}` : null;
    const history = Storage.get(historyKey) || [];

    if (history.length > 0) {
      const questsCompleted = history.length;

      const totalScoreSum = history.reduce((acc, curr) => acc + curr.score, 0);
      const averageScore = ((totalScoreSum / 10) * 10).toFixed(1);

      const difficultyWeights = { hard: 3, medium: 2, easy: 1 };
      const sortedQuizzes = [...history].sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        const weightA = difficultyWeights[a.difficulty?.toLowerCase()] || 0;
        const weightB = difficultyWeights[b.difficulty?.toLowerCase()] || 0;
        if (weightB !== weightA) return weightB - weightA;
        const timeA = new Date(a.timestamp || a.date).getTime();
        const timeB = new Date(b.timestamp || b.date).getTime();
        return timeB - timeA;
      });
      const bestCategory = sortedQuizzes[0]?.category || 'None';

      setStats({
        questsCompleted,
        averageScore,
        bestCategory
      });
    } else {
      setStats({
        questsCompleted: 0,
        averageScore: '0.0',
        bestCategory: 'None'
      });
    }
  }, []);

  return (
    <div className="stats-container">
      <h1 className="stats-main-heading">
        Your Stats
      </h1>

      <div className="player-info">
        <p>Level: {playerInfo.level}</p>
        <p>XP: {playerInfo.xp}</p>
      </div>

      <div className="stats-flex">
        <div className="stats-card">
          <div className="stat-header">
            <div className="stat-icon i1"><img src={quest} alt="Quest Icon" className="stat-img-asset" /></div>
            <h4>Quests Completed</h4>
          </div>
          <p>{stats.questsCompleted}</p>
        </div>

        <div className="stats-card">
          <div className="stat-header">
            <div className="stat-icon i2"><img src={average} alt="Average Icon" className="stat-img-asset" /></div>
            <h4>Average Score</h4>
          </div>
          <p>{stats.averageScore}/10</p>
        </div>

        <div className="stats-card">
          <div className="stat-header">
            <div className="stat-icon i3"><img src={category} alt="Category Icon" className="stat-img-asset" /></div>
            <h4>Best Category</h4>
          </div>
          <p>{stats.bestCategory}</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;
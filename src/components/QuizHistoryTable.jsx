import React, { useState, useEffect } from 'react';
import Storage from '../utils/Storage'; 

function QuizHistoryTable() {
  const [bestQuizzes, setBestQuizzes] = useState([]);

  useEffect(() => {
    
    const currentUser = Storage.get("currentUser");
    const historyKey = currentUser ? `quizHistory_${currentUser.username.toLowerCase()}` : null;

    const rawHistory = Storage.get(historyKey) || [];

    const difficultyWeights = { hard: 3, medium: 2, easy: 1 };

    // Filter
    const sortedData = [...rawHistory].sort((a, b) => {

      // Sort by Highest Score
      if (b.score !== a.score) return b.score - a.score;

      // Sort by Difficulty
      const weightA = difficultyWeights[a.difficulty?.toLowerCase()] || 0;
      const weightB = difficultyWeights[b.difficulty?.toLowerCase()] || 0;
      if (weightB !== weightA) return weightB - weightA;

      // Sort by Most Recent Timestamp if difficulty AND score are identical
      const timeA = new Date(a.timestamp || a.date).getTime();
      const timeB = new Date(b.timestamp || b.date).getTime();
      return timeB - timeA;
    });

    setBestQuizzes(sortedData.slice(0, 5));
  }, []);

  if (bestQuizzes.length === 0) {
    return null; 
  }

  return (
    <div className="history-table">
      <div className="table-header">
        <h3>Top 5 Performance History</h3>
      </div>
      <div className="table-container">
        <table className="quiz-history-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Difficulty</th>
              <th>Score</th>
              <th>Accuracy</th>
              <th>Time Taken</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bestQuizzes.map((quiz, index) => {
              const accuracy = quiz.totalQuestions > 0 ? Math.round((quiz.score / 10) * 100) : 0;
              return (
                <tr key={quiz.id || index}>
                  <td className="category-col"><strong>{quiz.category}</strong></td>
                  <td>
                    <span className={`diff-badge ${quiz.difficulty.toLowerCase()}`}>
                      {quiz.difficulty}
                    </span>
                  </td>
                  <td className="score-col">{quiz.score}/{quiz.totalQuestions || 10}</td>
                  <td>
                    <div className="accuracy-bar">
                      <span className="accuracy-text">{accuracy}%</span>
                    </div>
                  </td>
                  <td>{quiz.timeTaken} mins</td>
                  <td className="date-col">{quiz.date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default QuizHistoryTable;
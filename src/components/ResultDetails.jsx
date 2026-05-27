import React from 'react'

function ResultDetails(props) {

  const difficulty = props.questions[0].difficulty
  const difficultyMap = { easy: "Relaxed", medium: "Focused", hard: "Elite" };
  const questDifficulty = difficultyMap[difficulty];

  return(
    <div className="result-summary-container">
      <div className="result-summary-header">
        <h3>Result Summary</h3>
      </div>
      <div className="result-summary-list">
        <div className="result-key">Category</div>
        <div className="result-value">{props.questions[0].category}</div>
      </div>
      <hr />
      <div className="result-summary-list">
        <div className="result-key">Difficulty</div>
        <div className="result-value">{questDifficulty}</div>
      </div>
      <hr />
      <div className="result-summary-list">
        <div className="result-key">No. of questions</div>
        <div className="result-value">10</div>
      </div>
      <hr />
      <div className="result-summary-list">
        <div className="result-key">Timestamp</div>
        <div className="result-value">{props.timeStamp}/10 Mins</div>
      </div>
      <hr />
      <div className="result-summary-list">
        <div className="result-key">Attempted</div>
        <div className="result-value">{props.attempted}</div>
      </div>
      <hr />
      <div className="result-summary-list">
        <div className="result-key">Skipped</div>
        <div className="result-value">{10 - props.attempted}</div>
      </div>
      <hr />
      <div className="result-summary-list">
        <div className="result-key">Score</div>
        <div className="result-value">{props.score}</div>
      </div>
    </div>
  )
}

export default ResultDetails

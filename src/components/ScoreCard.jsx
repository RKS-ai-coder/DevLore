import React, { useState} from 'react'

function ScoreCard(props) {
    return (
      <>
        <div className="score-card">
          <div className="result-circle">
            <svg className="progress-ring" width="160" height="160">
              <circle
                className="progress-ring-track"
                stroke="#e7fcf2"
                strokeWidth="16"
                fill="transparent"
                r="60"
                cx="80"
                cy="80"
              />
              <circle
                className="progress-ring-fill"
                stroke="#71ffbd"
                strokeWidth="16"
                fill="transparent"
                r="60"
                cx="80"
                cy="80"
                style={{
                  strokeDasharray: `${2 * Math.PI * 60}`,
                  strokeDashoffset: `${2 * Math.PI * 60 * (1 - props.score / 10)}`
                }}
                />
              </svg>
            <div className="result-percentage">
              <h3>{((props.score) / 10) * 100}%</h3>
            </div>
          </div>
          <p className="score">{props.score} / 10 Correct</p>
        </div>
        <h1 className="quest-result-head">Quest Complete !</h1>
      </>
    )
}

export default ScoreCard
import React from 'react'

function QuestLevel(props) {
  return(
    <div className="intensity-container">
      <div className="intensity-header">
        <div className="intensity-icon"> @ </div>
        <div className="intensity-header-content">
          <h2>Intensity Selector</h2>
          <p>Choose your pace and challenge level.</p>
        </div>
      </div>

      <div className="intensity-options">
        <div 
        id="Relaxed"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
        className="intensity-card relaxed">
        <h4>Relaxed 1x</h4>
        <p>Consistent learning, low pressure.</p>
        <div className="progress-bar"><div className="fill"></div></div>
      </div>

      <div 
      id="Focused"
        onClick={(e) => props.onSelect(e.currentTarget.id)} 
      className="intensity-card focused">
        <h4>Focused 1.5x</h4>
        <p>Balanced challenge for active growth.</p>
        <div className="progress-bar"><div className="fill"></div></div>
      </div>

      <div 
      id="Elite"
      onClick={(e) => props.onSelect(e.currentTarget.id)} 
      className="intensity-card elite">
        <h4>Elite 3x</h4>
        <p>High-speed mastery and expert tasks.</p>
        <div className="progress-bar"><div className="fill"></div></div>
        </div>
      </div>
    </div>
  )
}

export default QuestLevel

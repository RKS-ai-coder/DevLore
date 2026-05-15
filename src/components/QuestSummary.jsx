import React from 'react'

function QuestSummary(props) {

  const [duration, setDuration] = React.useState()

  React.useEffect(() => {
  if (props.Level === "easy") {
    setDuration(10);
  } else if (props.Level === "medium") {
    setDuration(7.5);
  } else if (props.Level === "hard"){
    setDuration(5);
  } else {
    setDuration()
  }
}, [props.Level]);

  return(
    <div className="quest-summary-container">
      <div className="quest-summary-header">
        <h3>Quest Summary</h3>
      </div>
      <div className="quest-summary-list">
        <div className="quest-key">Category</div>
        <div className="quest-value">{props.Category}</div>
      </div>
      <hr />
      <div className="quest-summary-list">
        <div className="quest-key">Level</div>
        <div className="quest-value">{props.Level}</div>
      </div>
      <hr />
      <div className="quest-summary-list">
        <div className="quest-key">No. of Questions</div>
        <div className="quest-value">10</div>
      </div>
      <hr />
      <div className="quest-summary-list">
        <div className="quest-key">Duration</div>
        <div className="quest-value">{duration} Mins</div>
      </div>
      <button onClick={props.onSelect} className="begin-quest">Begin Quest</button>
    </div>
  )
}

export default QuestSummary

import React from 'react'

function QuestSummary(props) {

  const categoryMap = {
  9: "General Knowledge",
  17: "Science & Nature",
  18: "Computer Science",
  19: "Mathematics",
  21: "Sports",
  22: "Geography",
  23: "History",
  24: "Politics",
  25: "Art",
  27: "Animals"
};

  const categoryName = categoryMap[props.Category];

  const [duration, setDuration] = React.useState()

  React.useEffect(() => {
  if (props.Level === "easy") {
    setDuration(10);
  } else if (props.Level === "medium") {
    setDuration(15);
  } else if (props.Level === "hard"){
    setDuration(20);
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
        <div className="quest-value">{categoryName}</div>
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

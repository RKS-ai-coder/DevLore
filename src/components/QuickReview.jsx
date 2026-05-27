import React, { useState} from 'react'

function QuickReview(props) {

  const [activeReviewIndex, setActiveReviewIndex] = useState(0);
  
  const currentReviewQuestion = props.questions[activeReviewIndex];
  const userAnswer = props.selectedOption[activeReviewIndex];
  const correctOption = currentReviewQuestion.correctAnswer;

  const handleClick = (e) => {
  e.preventDefault();
  const index = parseInt(e.currentTarget.value);
  setActiveReviewIndex(index);
};

return(
  <div className="review-layout">

    <div className="review-container">
      <h2 className="review-heading">Quick Review</h2>
      <div className="review-question">
        <ul>
            <li><button type="button" value="0" onClick={handleClick}>1</button></li>
            <li><button type="button" value="1" onClick={handleClick}>2</button></li>
            <li><button type="button" value="2" onClick={handleClick}>3</button></li>
            <li><button type="button" value="3" onClick={handleClick}>4</button></li>
            <li><button type="button" value="4" onClick={handleClick}>5</button></li>
            <li><button type="button" value="5" onClick={handleClick}>6</button></li>
            <li><button type="button" value="6" onClick={handleClick}>7</button></li>
            <li><button type="button" value="7" onClick={handleClick}>8</button></li>
            <li><button type="button" value="8" onClick={handleClick}>9</button></li>
            <li><button type="button" value="9" onClick={handleClick}>10</button></li>
        </ul>
      </div>
    </div>

    <div className="solution-display-card">
      <div className="solution-card-header">
        <span className="q-badge">Question {activeReviewIndex + 1}</span>
      </div>
      
      <h3 className="solution-question-text">
        {currentReviewQuestion.question}
      </h3>

      <div className="solution-status-options">
        {currentReviewQuestion.options.map((option, idx) => {
          const isCorrectAnswer = (option === correctOption);
          const isUserChoice = (option === userAnswer);

          let optionClass = "review-opt-btn";
          if (isCorrectAnswer) optionClass += " correct-highlight";
          if (isUserChoice && !isCorrectAnswer) optionClass += " wrong-highlight";

          return (
            <div key={idx} className={optionClass}>
              <span className="review-opt-indicator">
                {isCorrectAnswer ? "✔" : isUserChoice ? "✘" : "•"}
              </span>
              <p>{option}</p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
)
}

export default QuickReview

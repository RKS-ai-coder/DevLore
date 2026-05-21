import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Questpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get questions from state
  const questions = location.state?.questions || [];

  const [selectedOption, setSelectedOption] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(600)
  const [isTimeUp, setIsTimeUp] = useState(false);

  // If no questions, send back to selection
  useEffect(() => {
    if (questions.length === 0) {
      navigate("/quests");
    }
  }, [questions, navigate]);

  if (questions.length === 0) {
    return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading Quest...</p>;
  }

  const currentQ = questions[currentIndex];

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } 
  };

  const handlePrev = (choice) => {
    if (currentIndex > 0 ) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(
      {...selectedOption, [currentIndex]: option}
    );
  };

  const handleSubmit = () => {
    let finalScore = 0;

    questions.forEach((q, index) => {
      const userAnswer = selectedOption[index];
      if (userAnswer === q.correctAnswer) {
        finalScore += 1;
      }
    });

    console.log("Selected Options:", selectedOption);
    console.log("Score:", finalScore);

    navigate("/quests/questpage/results", {
      state: { score: finalScore, total: questions.length },
    });
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTimer((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timeInterval)
          setIsTimeUp(true)
          return 0
        }
        return prevTime - 1
      })
    }, 1000);
    return () => clearInterval(timeInterval);
  }, [])

  useEffect(() => {
  if (isTimeUp) {
    alert("Time's up! Submitting your quest answers...");
    handleSubmit();
  }
  }, [isTimeUp]);

  const formatGlobalTime = (totalSeconds) => {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return `${paddedMinutes}:${paddedSeconds}`;
};

  return (
    <>
      <main className="quest-game-container">

        <div className="quest-progress">
          <div className="container-2">
          <div className="quest-game-category">{currentQ.category}</div>

          <div className="quest-timer-badge">
              <span className="timer-icon">&#9201;</span>
              <span className="timer-countdown">{formatGlobalTime(timer)}</span>
            </div>
          </div>
          <div className="quest-progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <div className="quest-progress-value">Quest Progress: {currentIndex + 1}/10</div>
        </div>
        
        <div className="question-box">
          <div className="qsn-container">
            <div className="question-icon"> @ </div>
            <h2 className="question">{currentQ.question}</h2>
          </div>
          
          <div className="options-flex">
            {currentQ.options.map((option, index) => (
              <button 
                key={index} 
                className={`option-btn ${(selectedOption[currentIndex] === option) ? "active-1" : ""}`}
                onClick={() => handleOptionClick(option)}
              >
                <div className="answer-icon"> {String.fromCharCode(65 + index)} </div>
                <div className="button-content" >
                  {option}
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="container-3">
          <button className="prev-question"
            onClick={() => handlePrev()}
            >
            <span className="arrow-symbol">&laquo;</span>
            Prev
          </button>
          <button className="next-question"
            onClick={() => handleNext()}
            >
            Next
            <span className="arrow-symbol">&raquo;</span>
          </button>
        </div>

        <button 
        className="submit-button"
        onClick={() => handleSubmit()}
        >Submit Quest
        </button>

      </main>
    </>
  );
}

export default Questpage;

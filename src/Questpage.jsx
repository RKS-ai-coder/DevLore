import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const Questpage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get questions from state
  const questions = location.state?.questions || [];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Guard: If no questions, send back to selection
  useEffect(() => {
    if (questions.length === 0) {
      navigate("/quests");
    }
  }, [questions, navigate]);

  if (questions.length === 0) return null;

  const currentQ = questions[currentIndex];

  const handleAnswer = (choice) => {
    if (choice === currentQ.correctAnswer) {
      setScore(prev => prev + 1);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      // Navigate to results and pass the final score
      navigate("/quests/questpage/results", { 
        state: { score: score + (choice === currentQ.correctAnswer ? 1 : 0), total: questions.length } 
      });
    }
  };

  return (
    <>
      <Nav />
      <main className="quest-game-container">
        <div className="progress-text">
          Question {currentIndex + 1} of {questions.length}
        </div>
        
        <div className="question-box">
          <h2>{currentQ.question}</h2>
          
          <div className="options-grid">
            {currentQ.options.map((option, index) => (
              <button 
                key={index} 
                className="option-btn"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Questpage;

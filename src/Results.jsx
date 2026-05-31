import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ScoreCard from "./components/ScoreCard";
import ResultDetails from "./components/ResultDetails"
import QuickReview from "./components/QuickReview";
import ResultPrizes from "./components/ResultPrizes";
import Storage from './utils/Storage';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentUser = Storage.get("currentUser");
  const fallbackKey = currentUser ? `latestResult_${currentUser.username.toLowerCase()}` : "latestQuizResult";

  const resultData = location.state || Storage.get(fallbackKey) || {};

  const score = resultData.score ?? 0;
  const questions = resultData.questions || [];
  const timeStamp = resultData.timeStamp ?? "0.00";
  const attempted = resultData.attempted ?? 0;
  const selectedOption = resultData.selectedOption || {};

  return (
    <main className="result-content">
      
        <ScoreCard 
        score={score}
        />

        <div className="result-container-1">
          <ResultDetails 
          questions={questions}
          score={score}
          timeStamp={timeStamp}
          attempted={attempted}
          />

          <ResultPrizes 
          questions={questions}
          score={score}
          timeStamp={timeStamp}
          attempted={attempted}
          />
        </div>

        <QuickReview 
          questions={questions}
          selectedOption={selectedOption}
        />


      <div className="bottom-section">
        <button className="try-another-quest" onClick={() => navigate("/quests")}>
          Try Another Quest
        </button>
        <button className="return-to-dashboard" onClick={() => navigate("/")}>
          Return to Dashboard
        </button>
      </div>
    </main>
  );
};

export default Results;

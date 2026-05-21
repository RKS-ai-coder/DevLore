import React from "react";
import { useNavigate } from "react-router-dom";
import Nav from "./components/Nav";
import QuestCategory from "./components/QuestCategory"
import QuestLevel from "./components/QuestLevel"
import QuestSummary from "./components/QuestSummary"
import Footer from "./components/Footer";
import fetchQuestions from "./utils/api"

const Quests = () => {

  const navigate = useNavigate();
  const [category, setCategory] = React.useState("")
  const [difficulty, setDifficulty] = React.useState("")

  const handleCategorySelect = (id) => {
  setCategory(id);
  console.log("Selected Category:", id);
};

  const handleDifficultySelect = (id) => {
  setDifficulty(id);
  console.log("Selected Difficulty:", id);
};

  const handleBeginQuest = async () => {
    if (!category || !difficulty) {
      alert("Please select a category and intensity first!");
      return;
    }

    try {

      const difficultyMap = { Relaxed: "easy", Focused: "medium", Elite: "hard" };
      const apiDifficulty = difficultyMap[difficulty];

      const questions = await fetchQuestions(category, apiDifficulty);
      
      navigate("/quests/questpage", { state: { questions } });
    } catch (err) {
      alert(err.message);
    }
  };
  

  return (
    <>
      <Nav />
      <main className="quests-content">
        <div className="quest-content-header">
          <h1>Select Your Next Quest</h1>
          <p>
            Tailor your learning journey. Choose a focus area and set your intensity to maximize your growth within the academy.
          </p>
        </div>
        <QuestCategory 
        onSelect={handleCategorySelect}
        />
        <div className="quest-container">
          <QuestLevel 
          onSelect={handleDifficultySelect}
          />
          <QuestSummary 
          Category={category}
          Level={difficulty}
          onSelect={handleBeginQuest}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Quests;

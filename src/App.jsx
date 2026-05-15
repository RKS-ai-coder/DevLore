import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./Home.jsx"
import Dashboard from "./Dashboard.jsx"
import QuizSetup from "./QuizSetup.jsx"
import Quiz from "./Quiz.jsx"
import Results from "./Results.jsx"
import storage from './utils/Storage.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/quizsetup" element={<QuizSetup />} />
        <Route path="/quizsetup/quiz" element={<Quiz />} />
        <Route path="/quizsetup/quiz/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./Home.jsx"
import Leaderboard from "./Leaderboard.jsx"
import Quests from "./Quests.jsx"
import Questpage from "./Questpage.jsx"
import Results from "./Results.jsx"
import Login from "./Login.jsx" 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} /> 
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/quests" element={<Quests />} />
        <Route path="/quests/questpage" element={<Questpage />} />
        <Route path="/quests/questpage/results" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
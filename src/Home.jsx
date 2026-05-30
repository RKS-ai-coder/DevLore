import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import Storage from "./utils/Storage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stats from "./components/Stats";
import QuizHistoryTable from "./components/QuizHistoryTable";

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const userSession = Storage.get("currentUser");
    if (!userSession) {
      navigate("/login")
    }
  }, [navigate]);
  
  return (
    <>
      <Nav />
      <main className="home-content">
        <Header />
        <Stats />
        <QuizHistoryTable />
      </main>
      <Footer />
    </>
  );
};

export default Home;

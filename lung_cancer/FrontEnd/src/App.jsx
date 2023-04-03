import React from "react";
import NavBar from "./components/MyNavbar";
import HeroSection from "./components/HomeSection";
import PredictPage from "./components/PredictPage";
import About from "./components/About";
import Causes from "./components/Causes";
import Treatments from "./components/Treatments";
import Symptoms from "./components/Symptoms";

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <PredictPage />
      <About/>
      <Causes/>
      <Treatments/>
      <Symptoms/>
    </>
  );
};

export default App;

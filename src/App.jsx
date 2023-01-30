import React from "react";
import About from "./components/About.jsx";
import Assessment from "./components/Assessment.jsx";
import Current_Production from "./components/Current_Production.jsx";
import Environmental_Risks from "./components/Environmental_Risks.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import EduDisclaimer from "./components/EduDisclaimer.jsx";
import Extraction from "./components/Extraction.jsx";
import Licensing from "./components/Licensing.jsx";
import Industry from "./components/Industry.jsx";
import Landing from "./components/Landing.jsx";
import { Routes, Route } from "react-router-dom";
import Oversight from "./components/Oversight.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Landing />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/current-production" element={<Current_Production />} />
        <Route path="/disclaimer" element={<EduDisclaimer />} />
        <Route path="/extraction" element={<Extraction />} />
        <Route path="/environmental-risks" element={<Environmental_Risks />} />
        <Route path="/licensing" element={<Licensing />} />
        <Route path="/oversight" element={<Oversight />} />
        <Route path="/industry" element={<Industry />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

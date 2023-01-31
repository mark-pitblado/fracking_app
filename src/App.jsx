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
import { Route, Routes } from "react-router-dom";
import Oversight from "./components/Oversight.jsx";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/assessment" element={<Assessment />} />
        <Route
          exact
          path="/current-production"
          element={<Current_Production />}
        />
        <Route exact path="/disclaimer" element={<EduDisclaimer />} />
        <Route exact path="/extraction" element={<Extraction />} />
        <Route
          exact
          path="/environmental-risks"
          element={<Environmental_Risks />}
        />
        <Route exact path="/licensing" element={<Licensing />} />
        <Route exact path="/oversight" element={<Oversight />} />
        <Route exact path="/industry" element={<Industry />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

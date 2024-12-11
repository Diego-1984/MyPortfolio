import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "Home.js";
import Resume from "\pages\Resume.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default App;

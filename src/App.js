import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import FreelanceReactIndia from "./pages/FreelanceReactIndia";
import FreelanceReactHyderabad from "./pages/FreelanceReactHyderabad";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />

          <Route
            path="/freelance-react-developer-india"
            element={<FreelanceReactIndia />}
          />

          <Route
            path="/freelance-react-developer-hyderabad"
            element={<FreelanceReactHyderabad />}
          />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

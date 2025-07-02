import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Mide from "./components/experience_pages/Mide";
import StateStreet from "./components/experience_pages/StateStreet";
import Northeastern from "./components/experience_pages/Northeastern";
import './App.css';
import SpaceBackground from "./components/SpaceBackground";

const App = () => (
  <Router>
    <SpaceBackground />
    <Header />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/experience/mide" element={<Mide/>}/>
      <Route path="/experience/statestreet" element={<StateStreet/>}/>
      <Route path="/experience/northeastern" element={<Northeastern/>}/>
    </Routes>
  </Router>
);

export default App;

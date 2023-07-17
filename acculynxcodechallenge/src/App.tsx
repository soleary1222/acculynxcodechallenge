import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Questions from "./components/questions";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DetailView from "./components/detail";
import questions from "./components/questions";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/detail/:questionId" element={<DetailView />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

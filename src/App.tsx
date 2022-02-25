import React from "react";
import "./App.css";
import { Article, Brand, Cta, Feature, Navbar } from "./components";
import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";

const App: React.FC = () => {
  return (
    <div className="app">
      <div className="gradient__bg"></div>
      <Navbar />
    </div>
  );
};

export default App;

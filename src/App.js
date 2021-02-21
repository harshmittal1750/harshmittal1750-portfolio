import "./App.css";
import React, { Component } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";

function App() {
  return (
    <React.Fragment>
      {" "}
      <Projects></Projects>
      <Header></Header>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;

import React from "react";
import "./App.scss";

//components
import Navbar from "./Navbar";

//Pages
import Hero from "./Hero";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
    </div>
  );
};

export default App;

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

function App() {
  const siteProps = {
    name: "Shrutik Borikar",
    title: "Web Designer",
    email: "shrutiky.borikar@gmail.com",
    gitHub: "shrutik29",
    instagram: "",
    linkedIn: "shrutik-borikar-44006b233/",
    medium: "",
    
  };
  
  const primaryColor = "#4E567E";
  const secondaryColor = "#D2F1E4";
  
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
}

export default App;

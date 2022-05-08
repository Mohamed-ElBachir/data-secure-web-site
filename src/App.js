import React from "react";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Data from "./components/data/Data";
import Cloud from "./components/cloud/Cloud";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Data/>
      <Cloud/>
      <Footer/>
    </div>
    
  
  );
}

export default App;

import "./App.css";

import NavBar from "./Components/NavBar";
import CarOusel from "./Components/CarOusel";
import Search from "./Components/Search";
import ImgCard from "./Components/ImgCard";
import Offers from "./Components/Offers";
import Footer from "./Components/Footer";

// import { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <NavBar />
      <CarOusel />
      <Search />

      <ImgCard />
      <Offers/>
      <Footer/>
   
    </div>
  );
}

export default App;

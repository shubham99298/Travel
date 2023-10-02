import "./App.css";

import NavBar from "./Components/NavBar";
import CarOusel from "./Components/CarOusel";
import Search from "./Components/Search";
import ImgCard from "./Components/ImgCard";

// import { useState, useEffect } from 'react';

function App() {
  return (
    <div>
      <NavBar />
      <CarOusel />
      <Search />

      <ImgCard />
   
    </div>
  );
}

export default App;

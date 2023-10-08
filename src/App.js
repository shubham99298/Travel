import "./App.css";

import NavBar from "./Components/NavBar";
import CarOusel from "./Components/CarOusel";

import ImgCard from "./Components/ImgCard";
import Offers from "./Components/Offers";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";

import Login from './Components/Login';


function App() {
  return (
    <Router>
      <NavBar />
    


      <Routes>
        <Route path="/" element={<CarOusel />} />

        <Route path="/imgc" element={<ImgCard />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

      </Routes>
     

     
      <Footer />
    </Router>
  );
}

export default App;

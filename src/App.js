import "./App.css";

import NavBar from "./Components/NavBar";
import CarOusel from "./Components/CarOusel";

import ImgCard from "./Components/ImgCard";
import Offers from "./Components/Offers";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Components/Contact";

import Login from "./Components/Login";
import Siignup from "./Components/Siignup";
import Cart from "./Components/Cart";
import { Provider } from "react-redux";
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<CarOusel />} />

          <Route path="/imgc" element={<ImgCard />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Siignup />} />

          <Route path="/cart" element={<Cart />} />

        </Routes>

        <Footer />
      </Router>
    </Provider>
  );
}

export default App;

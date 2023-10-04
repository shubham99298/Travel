// ImgCard.jsx
import React, { useState, useEffect } from "react";
import "../Styles/ImgCard.css";

const ImgCards = () => {
  const [products, setProducts] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]); // data filter k liye
  const [searchQuery, setSearchQuery] = useState(""); //city search k liye

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = () => {
    const filtered = products.filter(
      (product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      //example : france.includes(frances);
    );
    setFilteredProducts(filtered); //setfilter(1);
  };

  return (
    <>
      <div className="search">
        <div className="box">
          <label>Check-in:</label>
          <input type="date" placeholder="Check-in-Date" />
        </div>

        <div className="box">
          <label>Check-out:</label>
          <input type="date" placeholder="Check-out-Date" />
        </div>

        <div className="box">
          <label>Destination:</label>
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>

      <div className="imgc">
        <h2 className="travel">Travel🛩️</h2>
        <ul className="ul_list">
          {(searchQuery ? filteredProducts : products).map((product) => (
            <li className="listitem" key={product.id}>
              <h3 className="titles">{product.title}</h3>
              <img
                className="img1"
                src={product.imageSrc}
                alt={product.title}
              />
              <p className="prices">{product.price}</p>
              <button className="btn0">Book Now 🛩️</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ImgCards;

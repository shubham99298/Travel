import React from "react";
import "../Styles/Search.css";
const Search = () => {
  return (
    <div className="search">
      <div className="box">
        <label>Check-in:</label>
        <input type="date" placeholder="Check-in-Date" />
      </div>

      <div className="box">
        <label>Check-out:</label>
        <input type="date" placeholder="Check-out-Date" />
      </div>

      <div className="searchin">
        <input type="text" placeholder="search" />
        <button className="btn">search</button>
      </div>
     
    </div>
  );
};

export default Search;

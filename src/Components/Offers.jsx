import React from "react";
import "../Styles/Offers.css";
const Offers = () => {
  return (
    <>
      <h2>Offers</h2>
      <div className="offers">
        <div class="lefttag">
          <div class="tag">special Offers</div>
          <h3>Special Offers</h3>
          <p>
            🌴 <b>Beach Gateway</b>: Unwind on pristine sandy shores with our
            beach getaway offers. Enjoy special discounts on beachfront resorts,
            complimentary water sports activities, and more. Your ultimate
            seaside escape awaits!
          </p>

          <p>
            ✈️ <b>city Exploration:</b>
            Explore the world's most captivating cities with our city
            exploration offers. Uncover hidden gems, enjoy discounts on guided
            tours, and stay in the heart of the action at unbeatable prices
          </p>
          <button class="explore_btn">Explore Now</button>
        </div>

        <div className="grid">
          <div className="item1">
            <img
              className="grid-image"
              src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
              alt="image 1"
            />
          </div>
          <div className="item2">
            <img
              className="grid-image"
              src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
              alt="image 2"
            />
          </div>
          <div className="item3">
            <img
              className="grid-image"
              src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
              alt="image 3"
            />
          </div>
          <div className="item4">
            <img
              className="grid-image"
              src="https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
              alt="image 4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Offers;

import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/CarOusel.css'
import Footer from './Footer';

const CarOusel = () => {
  return (
    <div className='images'>
        <Carousel>
      <Carousel.Item>
        <img src='https://images.unsplash.com/photo-1433838552652-f9a46b332c40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80'  alt='first ' text="First slide" />
        <Carousel.Caption>
          <h3 style={{fontSize:"30px",fontStyle:'oblique'}}>No ,matter where your,re going to we'll take you there</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80' alt='second' text="Second slide" />
        <Carousel.Caption>
        <h3 style={{fontSize:"30px",fontStyle:'oblique'}}>No ,matter where your,re going to we'll take you there</h3>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWx8ZW58MHx8MHx8fDA%3D&w=1000&q=80' alt='h' text="Third slide" />
        <Carousel.Caption>
        <h3 style={{fontSize:"30px",fontStyle:'oblique'}}>No ,matter where your,re going to we'll take you there</h3>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <hr/>
      <h2>Travelling Destinations <img
        className="imgcontact"
        src="https://svgsilh.com/svg/147495.svg"
        alt='third'
      /></h2>
     
    <div className="grids">
          <div className="item
          1">
            <img
              className="grid-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg/405px-Sydney_Opera_House_and_Harbour_Bridge_Dusk_%282%29_2019-06-21.jpg"
              alt="image1"
            />
          </div>
          <div className="item2">
            <img
              className="grid-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Perth_CBD_skyline_from_State_War_Memorial_Lookout%2C_2023%2C_04.jpg/1200px-Perth_CBD_skyline_from_State_War_Memorial_Lookout%2C_2023%2C_04.jpg"
              alt="image2"
            />
          </div>
          <div className="item3">
            <img
              className="grid-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Adelaide_skyline%2C_December_2022.jpg/405px-Adelaide_skyline%2C_December_2022.jpg"
              alt="image3"
            />
          </div>
          <div className="item4">
            <img
              className="grid-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/432px-Skyscrapers_of_Shinjuku_2009_January.jpg"
              alt="image4"
            />
          </div>
        </div>  
        <Footer/>
    
    </div>
  )
}

export default CarOusel

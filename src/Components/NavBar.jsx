import React from 'react'
import '../Styles/NavBar.css'
import {Link} from "react-router-dom"


const NavBar = () => {
  return (
    <div className='nav1'>
        <header>
        <nav>
          
            <div className="left">
                <b className='b1'>Tra</b>
                <b className='b2'>Veller</b>
                
            </div>
        
            <div className="right">
                <ul>
                    
                    <li><a href="/">Home</a></li>
                    <li><Link to={"/imgc"}>Travel</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/offers"}>Offers</Link></li>
                    <li><Link to={"/login"}>Login</Link></li>


     
                   
                </ul>
            </div>
        </nav>
    </header>
   
   
    </div>
  )
}

export default NavBar

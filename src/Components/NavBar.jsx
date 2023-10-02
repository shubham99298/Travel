import React from 'react'
import '../Styles/NavBar.css'



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
                    
                    <li><a href="/">Favourites</a></li>
                    <li><a href="/">Login </a></li>
                    <li><a href="/">Contact us</a></li>
                   
                </ul>
            </div>
        </nav>
    </header>
   
   
    </div>
  )
}

export default NavBar

import React from 'react'
import '../Styles/NavBar.css'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'
import { FaPlane } from 'react-icons/fa'
import { FaHome } from 'react-icons/fa'
import { FaPhone } from 'react-icons/fa'
import { FaCoffee } from 'react-icons/fa'
import { FaShoppingBag } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'
const NavBar = () => {
    const items=useSelector((state)=>state.cart);

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
                    
                    <li><a href="/"><FaHome/> Home</a></li>
                    <li><Link to={"/imgc"}><FaPlane/> Travel</Link></li>
                    <li><Link to={"/contact"}><FaPhone/> Contact</Link></li>
                    <li><Link to={"/offers"}><FaCoffee/> Offers</Link></li>
                    <li><Link to={"/cart"}><FaShoppingBag/> :</Link>{items.length}</li>

                    <li><Link to={"/login"}><FaUser/></Link></li>
                    
                  

                   
                </ul>
                
            </div>
        </nav>
    </header>
   
   
    </div>
  )
}

export default NavBar

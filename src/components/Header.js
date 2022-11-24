import React from 'react'
import { useSelector } from 'react-redux'
import {useNavigate} from "react-router-dom"
import { NavLink } from "react-router-dom";

function Header() {
    const selector =  useSelector(state => state.cartData)
    // const navigate = useNavigate()
    
  return (
    <div>
       <div className='cart_img'>
            <span>{selector.arrayValue.length}</span>
            <NavLink to={"/ViewCart"}>
            <img  src='cart.png' alt=''/>  
            </NavLink>          
        </div>
    </div>
  )
}
export default Header

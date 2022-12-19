import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const selector = useSelector((state) => state.cartData);
  // const navigate = useNavigate()

  return (
    <div>
      <div>
        <div>
          <Link to="/grocery">
            <img
              src="/images/grocery/grocery.png"
              height="100px"
              width="100px"
            />
          </Link>
        </div>
        <div>
          <label>Grocery</label>
        </div>
      </div>
      <div>
        <div>
          <Link to="/iphone">
            <img
              src="/images/electronics/electronics.png" 
              height="100px"
              width="100px"
            />
          </Link>
        </div>
        <div>
         <label>Phones & Laptop</label>
        </div>
      </div>
      <div className="cart_img">
        <span>{selector.arrayValue.length}</span>
        <NavLink to={"/ViewCart"}>
          <img src="cart.png" alt="" />
        </NavLink>
      </div>
    </div>
  );
}
export default Header;

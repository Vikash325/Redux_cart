import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Header() {
  const selector = useSelector((state) => state.cartData);
  // const navigate = useNavigate()

  return (
    <div className="main_header">
      <div className="top_header">
        {/* <div>SastaKart</div> */}
        <div className="search_items">
          <input type="search" placeholder="Search Products" />
          <span>
            <i
              class="fa-sharp fa-solid fa-magnifying-glass"
              style={{ color: "#2874f0" }}
            ></i>
          </span>
        </div>
        <div>
          <button className="login">Login</button>
        </div>
        <div className="cart_img">
          <span>{selector.arrayValue.length}</span>
          <NavLink to={"/ViewCart"}>
            <i className=" kart_icon fa-solid fa-cart-shopping fa-xl" />
          </NavLink>
        </div>
      </div>
      <div className="items_category">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <div>
              <Link to="/grocery">
                <img
                  src="/images/grocery/grocery.png"
                  height="50px"
                  width="50px"
                />
              </Link>
            </div>
            <div>
              <label className="item_Name">Grocery</label>
            </div>
          </div>
          <div>
            <div>
              <Link to="/iphone">
                <img
                  src="/images/electronics/electronics.png"
                  height="50px"
                  width="50px"
                />
              </Link>
            </div>
            <div>
              <label className="item_Name">Phones & Laptop</label>
            </div>
          </div>
          <div>
            <div>
              <Link to="/iphone">
                <img
                  src="/images/electronics/electronics.png"
                  height="50px"
                  width="50px"
                />
              </Link>
            </div>
            <div>
              <label className="item_Name">Phones & Laptop</label>
            </div>
          </div>
          <div>
            <div>
              <Link to="/iphone">
                <img
                  src="/images/electronics/electronics.png"
                  height="50px"
                  width="50px"
                />
              </Link>
            </div>
            <div>
              <label className="item_Name">Phones & Laptop</label>
            </div>
          </div>
          <div>
            <div>
              <Link to="/iphone">
                <img
                  src="/images/electronics/electronics.png"
                  height="50px"
                  width="50px"
                />
              </Link>
            </div>
            <div>
              <label className="item_Name">Phones & Laptop</label>
            </div>
          </div>
          <div>
            <div>
              <Link to="/iphone">
                <img
                  src="/images/electronics/electronics.png"
                  height="50px"
                  width="50px"
                />
              </Link>
            </div>
            <div>
              <label className="item_Name">Phones & Laptop</label>
            </div>
          </div>
          <div>
            <div>
              <Link to="/iphone">
                <img
                  src="/images/electronics/electronics.png"
                  height="50px"
                  width="50px"
                />
              </Link>
            </div>
            <div>
              <label className="item_Name">Phones & Laptop</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;

import React, { useState } from "react";
// import { NavItem, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToCart, removeToCart } from "../service/actions/action";

function Iphone(props) {
  console.log("iPhone", props);
  const dispatch = useDispatch();
  const getPhones = useSelector((state) => state.cartData.data);
  const phonesData = getPhones.filter((value) => value.type === "electronics");
  console.log("phones", phonesData);

  return (
    <div className="main-div">
      {
      phonesData.map((items) => {
        return (
          <div>
            <div className="main">
              <div className="container">
                <img src={items.imageUrl} alt="iphone img" />
              </div>
              <div className="about">
                <h3>{items.name}</h3>
                <p style={{ margin: "2%" }}>{items.description}</p>
                <div className="items">
                  <div className="items_span">
                    <span>{items.price}</span>
                  </div>
                  <div>
                    {items?.added ? (
                      <Link to="/ViewCart" className="btn btn-primary">
                        GO TO CART
                      </Link>
                    ) : (
                      <button
                        onClick={() => dispatch(addToCart({ items: items }))}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                  <span>                   
                    <button>Buy</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Iphone;

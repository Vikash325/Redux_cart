import React, { useState } from "react";
import { NavItem, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeToCart } from "../service/actions/action";

function Iphone() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartData.cartData);

  return (
    <div className="main-div">
      {getData.map((items) => {
        return (
          <>
            <div className="main">
              <div className="container">
                <img src={items.imageUrl} alt="iphone img" />
              </div>
              <div className="about">
                <h3>{items.name}</h3>
                <p style={{ margin: "2%" }}></p>
                <div className="items">
                  <div className="items_span">
                    <span>{items.price}</span>
                  </div>

                  <div>
                    {items?.added ? (
                      <button>GO TO CART</button>
                    ) : (
                      <button
                        onClick={() => dispatch(addToCart({ items: items }))}
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Iphone;

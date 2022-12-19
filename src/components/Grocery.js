import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../service/actions/action";
function Grocery() {
  const dispatch = useDispatch();
  const getGrocery = useSelector((state) => state.cartData.data);
  const groceryData = getGrocery.filter((value) => value.type === "grocery");
  console.log("grocery", groceryData);
  return (
    <div>
      {groceryData.map((items) => {
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
                    {" "}
                    <button>Buy</button>{" "}
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
export default Grocery;

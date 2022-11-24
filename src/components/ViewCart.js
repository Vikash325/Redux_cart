import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../service/actions/action";

function ViewCart() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartData.arrayValue);
  console.log("state of viewCart", getData);
  console.log(getData.quntity)
  console.log("quntity",getData.quntity=getData.quntity+1,getData.quntity)
  const handleQuntity = () =>{
    console.log("enter prompt")
    prompt("enter qty")
  }
  return (
    <div className="viewCart">
      {getData.map((items) => {
        return (
          <>
            <div className="img_btn">
              <img style={{ width: "10rem" }} src={items.imageUrl} />
              <div className="viewcart_btn ">
              <label for="cars">quntity:</label>

<select name="number" id="cars">z
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option  value="3"> <button onClick={handleQuntity} >more</button> </option>
 
</select>
              </div>
            </div>
            <div>
              <h3>{items.name}</h3>
              <p>{items.description}</p>
            </div>
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => dispatch(removeToCart({ id: items.id }))}
            >
              Remove
            </button>
          </>
        );
      })}
    </div>
  );
}

export default ViewCart;

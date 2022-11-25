import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToCart } from "../service/actions/action";

function ViewCart() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.cartData.arrayValue);
  console.log("state of viewCart", getData);

  const handleQty = (obj,e) =>{
     
    getData.map((elem)=>{     
        if(obj.id===elem.id){
          if(e.target.value>0)
        {  
          elem.quntity = [e.target.value]
        }

          console.log("qty",elem.quntity)          
        }       
      })
   
  }
  return (
    <div className="viewCart">
      {getData.map((items) => {
        return (
          <>
            <div className="img_btn">
              <img style={{ width: "10rem" }} src={items.imageUrl} />
              <div className="">
              <label for="cars">quntity:</label>
              <input type="number" min="0"  onChange={(e)=>handleQty(items,e)}  />
              </div>
            </div>
            <div>
              <h3>{items.name}</h3>
              <p>{items.description}</p>
            </div>
            <button
              style={{ marginLeft: "5px" }}
              onClick={() => dispatch(removeToCart({ id: items.id }))} >
              Remove
            </button>
          </>
        );
      })}
    </div>
  );
}

export default ViewCart;

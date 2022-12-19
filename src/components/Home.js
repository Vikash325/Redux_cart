import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import Iphone from "./Iphone";

function Home() {
  const select = useSelector((state) => state.cartData.data);
  const [activePage,setActivePage]=useState("electronics")
  const [showData,setShowData]=useState([])
  // const handleChangeType=(type)=>{

  //   const data=select.filter((item)=>item.type===type);
  //   setShowData(data)
  // }

  // useEffect(()=>{
  //   handleChangeType("electronics")
  // },[])

  

  //  console.log("select",select)
  return (
    <div className="main_kart">
      {/* <div>
        <button onClick={()=>handleChangeType("grocery")}>Grocery</button>
        <button onClick={()=>handleChangeType("electronics")}>electronics</button>
      </div>
      <div>
      {showData.length>0 ? showData.map((items) => {        
        return <Iphone kartData={items}/>
      }) : <h1>Loading</h1>}
      </div> */}
    
    </div>
  );
}
export default Home;

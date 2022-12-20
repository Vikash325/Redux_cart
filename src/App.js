import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ViewCart from "./components/ViewCart";
import Iphone from "./components/Iphone";
import Grocery from "./components/Grocery";
import { collection, doc, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import { db } from "./Firebase";
import { useDispatch } from "react-redux";
import { firebaseData } from "./service/actions/action";
import { useState } from "react";
import MainComponent from "./components/MainComponent";



function App() {
  const dispatch=useDispatch();
  const [loading,setLoading]=useState(false)


useEffect(()=>{
  const getData=async()=>{
    setLoading(true)
    let firebase_data=[]
    const docRef = collection(db, "cartData");
    const docSnap = await getDocs(docRef);    
    docSnap.forEach(doc => {
      firebase_data.push(doc.data())
      console.log(doc.data());
  })  

  const firebase_da = dispatch(firebaseData({type:"FIREBASE_DATA",payload:firebase_data}))  
  console.log("firebase_da",firebase_da)
  setLoading(false)
}
  getData()
},[])
  return (
    <div className="App">
    
       <Header />    
       <MainComponent/>
       {
        loading ? <h4>Loading from firebase</h4>:
         <Routes>
         <Route  path="/" element= {<Home/>} />
         <Route  path="/viewcart" element= {<ViewCart/>} />
         <Route  path="/grocery" element= {<Grocery/>} />         
         <Route  path="/iphone" element= {<Iphone/>} />         
      </Routes>
    }
    </div>
  );
}
export default App;

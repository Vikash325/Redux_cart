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


function App() {
  const dispatch=useDispatch()

useEffect(()=>{
  const getData=async()=>{
    let firebase_data=[]
    const docRef = collection(db, "cartData");
    const docSnap = await getDocs(docRef);    
    docSnap.forEach(doc => {
      firebase_data.push(doc.data())
      console.log(doc.data());
  })  
  const firebase_da = dispatch(firebaseData({type:"FIREBASE_DATA",payload:firebase_data}))  
  console.log("firebase_da",firebase_da)
}
  getData()
},[])
  return (
    <div className="App">
       <Header />  
       {/* <Iphone/>     */}
     <Routes>
         <Route  path="/" element= {<Home/>} />
         <Route  path="/viewcart" element= {<ViewCart/>} />
         <Route  path="/grocery" element= {<Grocery/>} />         
      </Routes>
    </div>
  );
}
export default App;

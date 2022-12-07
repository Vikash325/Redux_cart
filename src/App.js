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


function App() {

useEffect(()=>{
  const getData=async()=>{

    const docRef = collection(db, "cartData");
    const docSnap = await getDocs(docRef);
    
    docSnap.forEach(doc => {
      console.log(doc.data());
  })
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

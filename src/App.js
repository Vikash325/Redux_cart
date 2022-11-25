import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ViewCart from "./components/ViewCart";
import Iphone from "./components/Iphone";
import Grocery from "./components/Grocery";

function App() {
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

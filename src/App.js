import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import ViewCart from "./components/ViewCart";
import Iphone from "./components/Iphone";

function App() {
  return (
    <div className="App">
       <Header />  
       {/* <Iphone/>     */}
     <Routes>
         <Route  path="/" element= {<Home/>} />
         <Route  path="/viewcart" element= {<ViewCart/>} />
         
      </Routes>
    </div>
  );
}
export default App;

import { useSelector } from "react-redux"
import { ADD_TO_CART, FIREBASE_DATA } from "../constant"
import { REMOVE_TO_CART } from "../constant"

export const addToCart = (data) => {
    console.log("action data", data)
    return{
        type: ADD_TO_CART,
        data:data
    }
} 

export const removeToCart = (id) =>{
    console.log(id,"remove data")
    return {
        type: REMOVE_TO_CART,
        id: id
    }
}

export const firebaseData = (fireBasedata)=>{
    console.log("firebaseDatafirebaseData",fireBasedata.payload)
    return {
        type :FIREBASE_DATA,
        data : fireBasedata.payload
    }
}
import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import cartData from "./reducer"

export default combineReducers(
    {
        cartData,
        firebase:firebaseReducer
    }
    )
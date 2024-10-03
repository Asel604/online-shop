import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counter/countSlice"
import wishReduser from "./wishlist/wishSlice"
import cartReduser from "./cart/cart"
import checkReduser from "./check/checkOut"

const myStore = configureStore({
    reducer:{
    counter:countReducer,
    wishlist:wishReduser,
    cart:cartReduser,
    check:checkReduser
    }
})
export default myStore
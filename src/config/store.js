import { configureStore } from "@reduxjs/toolkit";
import cartReducer from ".//cartSlice.js"

export let store = configureStore({
    reducer: {
        cart: cartReducer
    }
})
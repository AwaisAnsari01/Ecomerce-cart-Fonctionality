import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
    name: "Cart",

    initialState: {
        cartItems: []
    },

    reducers: {
        addCart: (state, action) => {
let itemExist = state.cartItems.find(item => item.id === action.payload.item.id)
if(itemExist){
    alert('!This item is already exist')
    return
}
           state.cartItems.push(action.payload.item)

        }
    }
})

export const { addCart } = cartSlice.actions
export default cartSlice.reducer
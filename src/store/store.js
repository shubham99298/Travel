import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlics'

const store=configureStore({
    reducer:{
        cart:cartReducer,
    },
})

export default store;
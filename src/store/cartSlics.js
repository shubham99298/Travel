const {createSlice} =require('@reduxjs/toolkit');


const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        add(state, action){
            state.push(action.payload)
        },
        remove(state, action){
                        // Find and remove the product by its ID
            const productToRemove = state.find((product) => product.id === action.payload);
      
            if (productToRemove) {
              const indexToRemove = state.indexOf(productToRemove);
              state.splice(indexToRemove, 1);
            }
          },
      

       
    },
});

export const {add , remove} =cartSlice.actions;
export default cartSlice.reducer;
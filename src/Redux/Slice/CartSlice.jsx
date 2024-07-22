import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartTotal: 0
};

const cartSilce = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCar: (state, action) => {
      const userItem = action.payload;
      const find = state.items.findIndex((items) => items._id === userItem._id);
      if (find != -1) {
        state.items[find].quantity += 1;
        state.cartTotal += userItem.price
        
        
      } else {
        state.items.push(userItem);
        state.cartTotal += userItem.price
        
      }
},
    removeCart: (state, action) => {
      const filter = state.items.filter(
        (items) => items._id != action.payload._id
      );
      state.items = filter
      state.cartTotal -= action.payload.price
},

    incrementQuantity:(state,action)=>{
      const findIndex = state.items.findIndex((items) => items._id === action.payload._id);  
       if(state.items[findIndex].quantity >= 1) {
        state.items[findIndex].quantity+=1 ;
        state.cartTotal += state.items[findIndex].price
       } 
       else{
        state.items[findIndex]
       }
},

      decrementQuantity:(state,action)=>{
      const findIndex = state.items.findIndex((items) => items._id === action.payload._id);
      if (state.items[findIndex].quantity > 1 ){
        state.items[findIndex].quantity -=1
        state.cartTotal -= state.items[findIndex].price
      }
      else{
        state.items[findIndex]
      }      
},
}});
export const { addToCar, removeCart,incrementQuantity,decrementQuantity } = cartSilce.actions;

export default cartSilce.reducer;

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      // Mutating the state here,
      // earlier in Vanilla(older) redux => Dont mutate the state!!!!
      {/**
        earlier process to change state variable
        const newState =[...state];
        newState.items.push(action.payload);
        return newState;
         */}
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0; //state=[]
    },
  },
});

export default cartSlice.reducer;
export const { addItems, removeItems, clearCart } = cartSlice.actions;
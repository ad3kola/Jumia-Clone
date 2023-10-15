import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    cartModalState: false,
  },
};

export const cartModalSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    cartModalOpen: (state, _) => {
      state.value.cartModalState = true;
	  },
	  cartModalClose: (state, _) => {
      return initialState;
	  },
  },
});


export const { cartModalOpen, cartModalClose } = cartModalSlice.actions
export default cartModalSlice.reducer
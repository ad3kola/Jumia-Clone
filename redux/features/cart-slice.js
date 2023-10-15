import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  value: {
    cartItems: [],
  },
};
export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const itemIndex = state.value.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.value.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item Quantity has increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.value.cartItems.push(temp);
        toast.success(
          `${action.payload.productTitle} has been added to your cart`
        );
      }
    },
    removeItemFromCart: (state, action) => {
      const removeItem = state.value.cartItems.filter(
        (item) => item.id !== action.payload.id,
      );

      state.value.cartItems = removeItem;
      toast.error(
        `${action.payload.productTitle} has been removed from your cart`
      );
    },

    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.value.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.value.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item Quantity has increased`);
      }
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.value.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.value.cartItems[itemIndex].cartQuantity > 1) {
        state.value.cartItems[itemIndex].cartQuantity -= 1;
        toast.error(`Item Quantity Decreased`);
      }
    },
    setClearCartItems: (state, action) => {
      state.value.cartItems = [], 
      toast(`You Cart has been cleared.`);
    },
  },
});

export const { addItemToCart, removeItemFromCart, setClearCartItems, setDecreaseItemQTY, setIncreaseItemQTY, removeItemEntirely } = cartSlice.actions;
export default cartSlice.reducer;

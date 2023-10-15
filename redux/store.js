import { configureStore } from "@reduxjs/toolkit";
import cartModalReducer from '@/redux/features/cart-modal-slice'
import cartReducer from '@/redux/features/cart-slice'

export const store = configureStore({
	reducer: {
		cartModal: cartModalReducer,
		cart: cartReducer,
	}
})
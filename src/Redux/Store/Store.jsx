import {configureStore} from '@reduxjs/toolkit'
import CartSlice from '../Slice/CartSlice'
import LoginSlice from '../Login/LoginSlice'

export const store = configureStore({
reducer:{
 cart: CartSlice,
 login: LoginSlice
}
})
export default store
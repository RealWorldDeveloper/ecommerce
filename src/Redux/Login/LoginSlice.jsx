import { createSlice } from "@reduxjs/toolkit";
const initialState = {
showLogin: {
  type: Boolean,
  default: false
},
currentStatus: 'Login'
}
const LoginSlice = createSlice({
name: 'login',
initialState,
reducers:{
LoginPop: (state,action)=> {
state.showLogin.default = action.payload
},
SignUpStatus: (state,action)=> {
state.currentStatus = action.payload
}
}
})
export const {LoginPop,SignUpStatus} = LoginSlice.actions
export default LoginSlice.reducer
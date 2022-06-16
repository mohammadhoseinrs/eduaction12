import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{},
    isLoading:false,
    isAuth:false,
    error:'',
    usercourse:{}
}
const loginSlice=createSlice({
    name:'login',
    initialState,
    reducers:{
        loginPending:(state)=>{
            state.isLoading=true
        },
        loginSuccess:(state,action)=>{
            console.log(action.payload);
            state.isLoading=false
            state.isAuth=true
            state.user=action.payload
            state.error=''
        },
        loginDetail:(state,action)=>{
            state.usercourse=action.payload
        },
        loginFailed:(state,action)=>{
            state.isLoading=false
            state.isAuth=false
            state.user={}
            state.error=action.payload
        }
    }
})

export const {loginPending, loginDetail,loginSuccess,loginFailed}=loginSlice.actions

export default loginSlice.reducer

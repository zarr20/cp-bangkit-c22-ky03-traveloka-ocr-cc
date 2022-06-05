import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "islogin",
    initialState: {
        isLoggedIn: false,
        user: {
            id: "",
            name:"",
            email:"",
            accessToken:"",
        }
    },
    reducers: {
        update: (state, action) => {
            console.log(action);
            state.user.email = action.payload.email;
            state.user.accessToken = action.payload.token;
            state.isLoggedIn = action.payload.islogin;
        }
    }
})

export const { update } = authSlice.actions;
export default authSlice.reducer;
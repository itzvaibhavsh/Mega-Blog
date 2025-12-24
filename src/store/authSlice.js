// this slice to keep check of authentication state of the user asking from the store
import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    status: false,   // whether user is logged in or not
    userData: null
}

const authSlice = createSlice({
     name: "auth",
     initialState,
     reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
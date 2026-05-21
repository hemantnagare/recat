import {createSlice} from '@reduxjs/toolkit';

const initialState={
    status:false,
    userdata:null
}

// authSlice.js — make sure userData is set on login
const authSlice = createSlice({
    name: "auth",
    initialState: {
        status: false,
        userData: null,  // <-- this is null until login
    },
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData; // must be set correctly
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        },
    },
});

export const {login,logout}=authSlice.actions;
export default authSlice.reducer;
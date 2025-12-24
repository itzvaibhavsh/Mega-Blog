// we are creating store for 2 reasons - state management and storing data in browser tempory memory
import {configureStore} from "@reduxjs/toolkit";
import authSlice from './authSlice'

const store = configureStore({
    reducer: {
         auth: authSlice,
    }
});

export default store;
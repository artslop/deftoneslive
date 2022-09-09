import { configureStore } from '@reduxjs/toolkit';
import showsReducer from "../features/shows/showsSlice.js";

export const store = configureStore({
    // reducer: {
    //     shows: showsReducer
    // }
    reducer: showsReducer
})

import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../Features/cars/car"

export const store = configureStore({
    reducer:{
        car:carReducer, 
    },
});
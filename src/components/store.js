import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import ToastMiddleware from '../Middlewares/ToastMiddleware';
import { authenticationSlice } from './authenticationSlice';

export default configureStore({
    reducer: {
        authenticationSlice: authenticationSlice 
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(ToastMiddleware)
})
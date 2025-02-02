import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from './LoaderSlice';

const store = configureStore({
    reducer: {
        loader: loaderReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
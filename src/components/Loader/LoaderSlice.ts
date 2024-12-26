import { createSlice } from "@reduxjs/toolkit";

const LoaderSlice = createSlice({
    name: 'loader',
    initialState: {
        isLoading: false,
    },
    reducers: {
        showLoader: (state) => {
            state.isLoading = true;
        },
        hideLoader: (state) => {
            state.isLoading = false;
        },
    },
});

export const { showLoader, hideLoader } = LoaderSlice.actions;
export default LoaderSlice.reducer;
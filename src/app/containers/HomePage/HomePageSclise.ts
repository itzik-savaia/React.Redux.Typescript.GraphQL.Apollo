import { IHomePageState } from './types';
import { createSlice } from "@reduxjs/toolkit";


const initialState: IHomePageState = {
    animePage: null
}

const HomePageSclise = createSlice({
    name: "homePage",
    initialState,
    reducers: {
        setAnimePage(state, action) {
            state.animePage = action.payload;
        }
    }
});

export const { setAnimePage } = HomePageSclise.actions;
export default HomePageSclise.reducer;
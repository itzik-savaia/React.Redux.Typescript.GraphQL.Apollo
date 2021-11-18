import { IRootState } from './../../types';
import { createSelector } from "reselect";

const selectHomePage = (state: IRootState) => state.homePage;


export const makeSelectAnimePage = createSelector(
    selectHomePage,
    (homePage) => homePage.animePage
);
import {configureStore} from "@reduxjs/toolkit";
import userDataReducer from "./UserDataSlice"
export const store = configureStore({
    reducer:{
        userData : userDataReducer
    }
});

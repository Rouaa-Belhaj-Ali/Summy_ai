import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "./article";

export const store =  configureStore({
    reducer:{[articleApi.reducerPath]:articleApi.reducer},  //to grab what we need froml a store
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware)
})
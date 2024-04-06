import { configureStore } from "@reduxjs/toolkit";
import { ArticleApi } from "./services/api";

export const store = configureStore({
    reducer: {
        [ArticleApi.reducerPath]: ArticleApi.reducer
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        ArticleApi.middleware
    )
})
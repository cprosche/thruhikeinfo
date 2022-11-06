import { configureStore } from "@reduxjs/toolkit";
import { reviewSignupApi } from "./trailsApi";

export const store = configureStore({
  reducer: {
    [reviewSignupApi.reducerPath]: reviewSignupApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewSignupApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

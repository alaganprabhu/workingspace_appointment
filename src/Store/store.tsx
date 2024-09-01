
import { configureStore } from "@reduxjs/toolkit";
import spaceReducer from "./apiReducer.tsx";

const store = configureStore({
  reducer: {
    space: spaceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

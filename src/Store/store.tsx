// import { configureStore } from "@reduxjs/toolkit";
// // import workingSpaceSlice from "./apiReducer.tsx";

// const store = configureStore({
//   reducer: {
//     workingSpace: workingSpaceSlice,
//   },
// });

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;

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

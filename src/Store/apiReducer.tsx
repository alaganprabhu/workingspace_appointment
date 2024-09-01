// import { createSlice } from "@reduxjs/toolkit";
// import { fetchData } from "./Api.store.tsx";

// const initialState: any = {
//   loading: false,
//   data: [],
// };

// const workingSpaceOverview = createSlice({
//   name: "workingSpaceOverview",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(fetchData.pending, (state) => {
//       state.loading = true;
//     });
//     builder.addCase(fetchData.fulfilled, (state, action) => {
//       state.loading = true;
//       state.data = action.payload;
//     });
//     builder.addCase(fetchData.rejected, (state, action) => {
//       state.loading = false;
//       state.error = action.error;
//     });
//   },
// });

// export default workingSpaceOverview.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchSpaces } from "./Api.store.tsx";

interface SpaceState {
  data: any[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SpaceState = {
  data: [],
  status: "idle",
  error: null,
};

const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpaces.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSpaces.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSpaces.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch spaces";
      });
  },
});

export default spaceSlice.reducer;

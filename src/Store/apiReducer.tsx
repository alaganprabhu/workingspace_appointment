
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { fetchSpaces } from "./Api.store.tsx";

interface SpaceState {
  data: any[];
  status: boolean;
  error: string | null;
}

const initialState: SpaceState = {
  data: [],
  status: false,
  error: null,
};

const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSpaces.pending, (state) => {
        state.status = true;
      })
      .addCase(fetchSpaces.fulfilled, (state, action) => {
        state.status = false;
        state.data = action.payload;
      })
      .addCase(fetchSpaces.rejected, (state, action) => {
        state.status = true;
        state.error = action.error.message || "Failed to fetch spaces";
      });
  },
});

export default spaceSlice.reducer;

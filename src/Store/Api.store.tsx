import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL =
  "https://raw.githubusercontent.com/alaganprabhu/workingSpace/main/db.json";


export const fetchSpaces = createAsyncThunk("space/fetchSpaces", async () => {
  try{
    const response = await axios.get(BASE_URL);
  return response.data;

  }catch(err){
    console.log(err)
  }
});



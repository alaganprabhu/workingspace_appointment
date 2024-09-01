import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// export const spaceOverviewData = [
//   {
//     title: "Workspace",
//     location: "HSR Sector 6, Service Road",
//     locationValue: "6",
//     // location_icon: "/images/assistant_direction.svg",
//     dayPass: "₹ 249/Day",
//     bulkPass: "₹ 2400",
//     bulkDays: "10",
//     image: "https://ibb.co/7bcKyWw",
//     // image: "/images/workspace.png",
//   },
//   {
//     title: "Honeykomb",
//     location: "HSR Sector 6, Service Road",
//     locationValue: "6",
//     // location_icon: "images/assistant_direction.svg",
//     image: "/images/honeykomb.svg",
//     dayPass: "₹ 249/Day",
//     bulkDays: "10",
//     bulkPass: "₹ 2400",
//   },
//   {
//     title: "Platinum",
//     location: "HSR Sector 6, 5th main Road",
//     locationValue: "6",
//     // location_icon: "images/assistant_direction.svg",
//     image: "/images/platinum.svg",
//     dayPass: "₹ 249/Day",
//     bulkPass: "₹ 2400",
//     bulkDays: "10",
//   },
//   {
//     title: "Platinum",
//     location: "HSR Sector -2, 27th main Road",
//     locationValue: "6",
//     // location_icon: "images/assistant_direction.svg",
//     image: "/images/workspace2.svg",
//     dayPass: "₹ 249/Day",
//     bulkPass: "₹ 2400",
//     bulkDays: "10",
//   },
//   {
//     title: "Campus",
//     location: "HSR Sector 6, 5th main Road",
//     locationValue: "6",
//     // location_icon: "images/assistant_direction.svg",
//     image: "/images/campus.svg",
//     dayPass: "₹ 249/Day",
//     bulkPass: "₹ 2400",
//     bulkDays: "10",
//   },
//   {
//     title: "Premium",
//     location: "HSR Sector 6, 5th main Road",
//     locationValue: "6",
//     location_icon: "images/assistant_direction.svg",
//     image: "/images/premium.svg",
//     dayPass: "₹ 249/Day",
//     bulkPass: "₹ 2400",
//     bulkDays: "10",
//   },
// ];

const BASE_URL =
  "https://raw.githubusercontent.com/alaganprabhu/workingSpace/main/db.json";

// export const fetchData = async () => {
//   try {
//     // const response = await axios.get("./db.json");
//     const response = await axios.get(BASE_URL);
//     console.log(response.data, "resp");
//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// };
export const fetchSpaces = createAsyncThunk("space/fetchSpaces", async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

// export const fetchData = createAsyncThunk(
//   "spaceOverview/fetchSpaceOverviewData",
//   async () => {
//     try {
//       const response = await axios.get(BASE_URL);
//       return response;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// );

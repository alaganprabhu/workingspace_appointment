import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../Store/hooks.tsx"; // Import typed hooks

import { RootState } from "../../Store/store.tsx";

// import { fetchData } from "../../Store/Api.store.tsx";
import SpaceCard from "./spaceCardCommon.tsx";
import { fetchSpaces } from "../../Store/Api.store.tsx";

export default function SpaceOverview() {
  //   const [space, setSpace] = useState<any[]>([]);
  const dispatch = useAppDispatch(); // Use typed dispatch
  const space = useAppSelector((state) => state.space.data);
  const spaceStatus = useAppSelector((state) => state.space.status);

  //   const fetchDataAsync = async () => {
  //     try {
  //       const data = await fetchData(); // Await for fetchData to resolve
  //       setSpace(data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   useEffect(() => {
  //     fetchDataAsync();
  //   }, []);

  useEffect(() => {
    if (spaceStatus === "idle") {
      dispatch(fetchSpaces());
    }
  }, [spaceStatus, dispatch]);

  console.log(space, "space");
  return (
    <>
      <div className="container spaceOverview_container">
        <h2 className="my-4">Our Space Overview</h2>
        <div className="row">
          {space.map((ele: any) => (
            <SpaceCard
              key={ele.location}
              location={ele.location}
              imageSrc={ele.image}
              dayPass={ele.dayPass}
              bulkPass={ele.bulkPass}
              bulkDays={ele.bulkDays}
              discount={ele.discount}
              locationValue={ele.locationValue}
            />
          ))}
        </div>
      </div>
    </>
  );
}

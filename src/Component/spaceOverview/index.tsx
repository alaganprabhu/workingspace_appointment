import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Store/hooks.tsx"; 

import SpaceCard from "./spaceCardCommon.tsx";
import { fetchSpaces } from "../../Store/Api.store.tsx";

export default function SpaceOverview() {
  const dispatch = useAppDispatch(); 
  const space = useAppSelector((state) => state.space.data);
  const spaceStatus = useAppSelector((state) => state.space.status);

  useEffect(() => {
      dispatch(fetchSpaces());
  }, []);

  return (
    <>
      <div className="container spaceOverview_container">
        <h2 className="my-4">Our Space Overview</h2>
        <div className="row">
          {space.map((ele: any, index:number) => (
            <SpaceCard
              key={index}
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

import React from "react";
import "./spaceOverview.css";

interface spaceProps {
  location: string;
  icon?: any;
  imageSrc?: any;
  dayPass: string;
  bulkPass: string;
  bulkDays: string;
  locationValue?: string;
  discount?: string;
}

const SpaceCard: React.FC<spaceProps> = ({
  location,
  icon,
  imageSrc,
  dayPass,
  bulkPass,
  bulkDays,
  discount,
  locationValue,
}) => {
  return (
    <div className="col-md-4  spaceCard">
      <div className="card">
        <div className="card-body">
          <div className="card_locations">
            <h5 className="card-title">{location}</h5>
            <div className="card_direction">
              {/* <img src={icon} /> */}
              <img src="images/assistant_direction.svg" />
              <p>{locationValue}Kms</p>
            </div>
          </div>
          <img src={imageSrc} className="card-img-top" />

          <div className="spaceOverview_button">
            <button type="button" className=" dayPass_space_button">
              <div style={{ display: "flex", flexDirection: "column" }}>
                <p>Day Pass</p>
                <h6>{dayPass}</h6>
              </div>
              <img src="images/arrow.png" />
            </button>

            <button type="button" className="bulkPass_space_button">
              <div className="discount">
                <p>{discount} Discount</p>
              </div>
              <div className="bulkPass_btn">
                <div>
                  <p>Bulk Pass</p>
                  <h6>
                    <b>{bulkPass}</b>/{bulkDays} Days
                  </h6>
                </div>
                <img src="images/arrow.png" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceCard;

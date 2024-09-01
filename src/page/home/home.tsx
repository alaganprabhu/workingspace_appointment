import React from "react";
import "./home.css";
import WhyChooseUs from "../../Component/ChooseUs/index.tsx";
import SpaceOverview from "../../Component/spaceOverview/index.tsx";

export default function Home() {
  return (
    <>
      <div className="container-fluid p-5 bg-light">
        <div className="row align-items-center home_background">
          <div className="col-md-8 left_column ">
            <h1 className="display-5 fw-bold">
              Host your meeting with world-class amenities. Starting at
              <span className="text-warning ml-2">₹199/-!</span>
            </h1>
          </div>
          <div className="col-md-4 text-center">
            <img
              src="images/coworking_right_img.svg"
              alt="Meeting Illustration"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <SpaceOverview />

      <div>
        <div className="container ">
          <h2 className="app_head">Download our app now</h2>

          <div className="mobile_container">
            <div className="row align-items-center row_section">
              <div className="col-sm-5 image_section">
                <img src="images/mobile.png" className="mobile" />
              </div>
              <div className="col-sm-6 ">
                <h4 className="boost_content">
                  Boost your productivity with the BHIVE Workspace app. <br />
                  Elevate your workspace, collaborate efficiently, and unlock{" "}
                  <br />
                  exclusive perks.
                </h4>
                <div className="app_store">
                  <img src="images/googleplay.png" />
                  <img src="images/appstore.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

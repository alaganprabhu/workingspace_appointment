import React from "react";
import { text } from "../../constant.tsx";
import "./choseUs.css";

export default function WhyChooseUs() {
  return (
    <>
      <div className="container choose-us-container">
        <div>
          <h2 className="mb-4">Why Choose Us?</h2>
          <div className="row row-cols-1 row-cols-sm-4">
           
            {text.map((feature, index) => (
              <div key={index} className="col">
                <div className="d-flex align-items-center">
                  <img
                    src={feature.icon}
                    className="me-2"
                    style={{ width: "24px", height: "24px" }}
                    alt={feature.text}
                  />
                  <span>{feature.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

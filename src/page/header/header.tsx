import React from "react";
import "./header.css";

const Header = () => {
  return (
    <>
      <div className="flex row header">
        <div className="header_layout">
          <img
            src="images/bhive_workspace.png"
            style={{ width: "125px", height: "40px" }}
          />
          <img
            src="images/call.svg"
            style={{ width: "52px", height: "52px" }}
          />
        </div>
      </div>
    </>
  );
};

export default Header;

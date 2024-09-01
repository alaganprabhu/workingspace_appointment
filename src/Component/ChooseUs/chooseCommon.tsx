import React from "react";

interface chooseElement {
  text: string;
  icon?: any;
  id?: string;
}

const ChooseUs: React.FC<chooseElement> = ({ text, icon }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-0">
      <div className="col d-flex align-items-center">
        <span>{text}</span>
      </div>
    </div>
    // {/* </div> */}
  );
};

export default ChooseUs;

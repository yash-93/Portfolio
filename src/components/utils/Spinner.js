import React from "react";

import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="backdrop loading-spinner__overlay">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default Spinner;

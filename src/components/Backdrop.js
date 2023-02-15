import * as React from "react";

const Backdrop = ({ handleBackdropClose }) => {
  return (
    <div className="backdrop" onClick={handleBackdropClose}>
      <div className="backdrop-content">
        You Already Added This to Your List
      </div>
    </div>
  );
};

export default Backdrop;

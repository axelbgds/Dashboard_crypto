import React from "react";

const Top = () => {
  return (
    <div className="top" onClick={() => window.scrollTo(0, 0)}>
      <img src="./assets/arrow-icon.svg" alt="logo-top" />
    </div>
  );
};

export default Top;

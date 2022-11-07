import React from "react";
import { useState } from "react";
// import TableLine from "./TableLine";

const HearderFilters = ({ coinsData }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    coinsData(text);
  };

  return (
    <div className="table-filters">
      <div className="table-filters-container">
        {/* <div className="stable-checkbox-cointainer">
          <input type="checkbox" id="stableCoin" defaultChecked={true} />
          <label htmlFor="stableCoin">Avec stable coin</label>
        </div>
        <div className="no-list-btn">
          <p>Aucune liste</p>
        </div> */}

        <div className="table-filters-container">
          <form onSubmit={onSubmit}>
            <div>
              <input onChange={(e) => setText(e.target.value)} />
              <button type="submit">Search</button>
            </div>
          </form>
        </div>

        <div className="fav-list">
          <p>Liste des favoris</p>
          <img src="./assets/star-full.svg" alt="icon star" />
        </div>
      </div>
    </div>
  );
};

export default HearderFilters;

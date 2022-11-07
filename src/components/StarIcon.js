import React, { useEffect, useState } from "react";

// Log id for each token
const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  // Question to localStorage create a table with the like
  useEffect(() => {
    if (window.localStorage.coinList) {
      let favList = window.localStorage.coinList.split(",");
      if (favList.includes()) {
        setLike(true);
      }
    }
  }, []);

  //   Function checker
  const idChecker = (id) => {
    let favList = null;

    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }

    if (favList) {
      if (favList.includes(id)) {
        // filter every token
        window.localStorage.coinList = favList.filter((coin) => coin !== id);
        setLike(false);
      } else {
        // destruct favList
        window.localStorage.coinList = [...favList, coinId];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };

  return (
    // If like or not idChecker(check if star is empty or not)
    <img
      onClick={() => idChecker(coinId)}
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="icon-star"
    />
  );
};

export default StarIcon;

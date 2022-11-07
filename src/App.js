import axios from "axios";
import React, { useEffect, useState } from "react";
import HeaderInfos from "./components/HeaderInfos";
// import HeaderFilters from "./components/HeaderFilters";
import Table from "./components/Table";
import Top from "./components/Top";

function App() {
  const [coinsData, setCoinsData] = useState([]);
  // const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y`
      )
      .then((res) => setCoinsData(res.data));
  }, []);

  // const handleSeachTerm = (e) => {
  //   console.log(e.target.value);
  // };

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        {/* <HeaderFilters coinsData={coin.name} /> */}
      </header>
      <Table coinsData={coinsData} />
      <Top />
    </div>
  );
}

export default App;

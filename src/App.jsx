import "./style.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home.jsx";
import Coin from "./views/Coin.jsx";
import { useState, useEffect } from "react";

export default function App() {
  const [coinData, setCoinData] = useState();

  useEffect(() => {
    fetch("https://api.coincap.io/v2/assets")
      .then((response) => response.json())
      .then((json) => setCoinData(json));
  }, []);

  return (
    <div>
      <Routes>
        {coinData && (
          <Route path="/" element={<Home coinData={coinData?.data} />} />
        )}
        {coinData && (
          <Route path="/coins/*" element={<Coin coinData={coinData?.data} />} />
        )}
      </Routes>
    </div>
  );
}

import "../style.scss";
import { useLocation } from "react-router-dom";
import SearchBar from "../components/searchBar/searchBar";
import CryptoItem from "../components/cryptoItem/cryptoItem";
import GetFav from "../components/getFavorites/getFavorites";

const Home = ({ coinData }) => {
  const { pathname } = useLocation();

  const regex = /^\/coins\/(.+)$/;

  // Use the match method to extract the wildcard part
  const match = pathname.match(regex);
  // Extract the wildcard part if there's a match
  const cryptoId = match[1]; // Extracted wildcard part

  function findCryptoById(id) {
    // Iterate through the data array
    for (const crypto of coinData) {
      // Check if the name matches
      if (crypto.id === id.toLowerCase()) {
        return crypto;
      }
    }
    return null; // Return null if not found
  }

  const crypto = findCryptoById(cryptoId);

  return (
    <div>
      <div>
        <SearchBar data={coinData} />
        <div style={{ marginTop: 20 }}></div>
        <GetFav />
      </div>
      <div className="Coin-card">
        <CryptoItem
          key={crypto.id}
          name={crypto.name}
          symbol={crypto.symbol}
          price={crypto.priceUsd}
          priceChange={crypto.changePercent24Hr}
          id={crypto.id}
        />
      </div>
    </div>
  );
};

export default Home;

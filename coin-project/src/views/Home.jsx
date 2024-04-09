import CryptoItem from "../components/cryptoItem/cryptoItem";
import "../style.scss";
import { Link } from "react-router-dom";
import Chart from "../components/pieChart/pieChart";
//import ColumnChart from "../components/columnChart/columnChart";
import SearchBar from "../components/searchBar/searchBar";

const Home = ({ coinData }) => {
  return (
    <div>
      <div>
        <SearchBar data={coinData} />
      </div>
      <div className="flexrow">
        <div className="half scroll-bar">
          <ul>
            {coinData.map((crypto) => (
              <button key={crypto.id}>
                <Link to={`/coins/${crypto.id}`}>
                  <CryptoItem
                    key={crypto.id}
                    name={crypto.name}
                    symbol={crypto.symbol}
                    price={crypto.priceUsd}
                    priceChange={crypto.changePercent24Hr}
                  />
                </Link>
              </button>
            ))}
          </ul>
        </div>
        <div className="half">
          MARKET SHARE TOP 10 CRYPTO COINS TESTING
          <Chart data={coinData} />
        </div>
      </div>
    </div>
  );
};

export default Home;

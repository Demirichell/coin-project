import CryptoItem from "../components/cryptoItem/cryptoItem";
import FooterCoin from "../components/footer/footercoin";
import "../style.scss";
import GetFav from "../components/getFavorites/getFavorites";

import Chart from "../components/pieChart/pieChart";
//import ColumnChart from "../components/columnChart/columnChart";
import SearchBar from "../components/searchBar/searchBar";

const Home = ({ coinData }) => {
  return (
    <div className="">
      <div>
        <SearchBar data={coinData} />
      </div>
      <div className="flexrow">
        <div className="half scroll-bar">
          <ul>
            {coinData.map((crypto) => (
              <CryptoItem
                key={crypto.id}
                name={crypto.name}
                symbol={crypto.symbol}
                price={crypto.priceUsd}
                priceChange={crypto.changePercent24Hr}
                id={crypto.id}
              />
            ))}
          </ul>
        </div>
        <div className="half">
          <h2> MARKET SHARE TOP 10 CRYPTO COINS TESTING</h2>
          <Chart data={coinData} />
          <GetFav />
        </div>
      </div>
      <FooterCoin />
    </div>
  );
};

export default Home;

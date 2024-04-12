import CryptoItem from "../components/cryptoItem/cryptoItem";
import FooterCoin from "../components/footer/footercoin";
import "../style.scss";
import Chart from "../components/pieChart/pieChart";
//import ColumnChart from "../components/columnChart/columnChart";
import SearchBar from "../components/searchBar/searchbar";
import GetFav from "../components/getFavorites/getFavorites";
import NavCoin from "../components/nav/nav";
import TreemapChart from "../components/treeMap/treeMap";

const Home = ({ coinData }) => {
  return (
    <div className="">
      <NavCoin />
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
          <Chart data={coinData} />
          <TreemapChart data={coinData} />
        </div>
      </div>
      <GetFav />
      <FooterCoin />
    </div>
  );
};

export default Home;

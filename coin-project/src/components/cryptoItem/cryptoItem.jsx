import "../../App.jsx";

const CryptoItem = ({ name, symbol, price, priceChange }) => {
  return (
    <li>
      <div>
        <h2>{symbol}</h2>
        <p>{name}</p>
      </div>
      <div className="right">
        <p>{Math.round(price * 1000) / 1000}</p>
        <p className={priceChange > 0 ? "green" : "red"}>
          {Math.round(priceChange * 100) / 100}%
        </p>
      </div>
    </li>
  );
};
export default CryptoItem;

const CoinDetailPage = ({ name, symbol, price, priceChange }) => {
  return (
    <li>
      <div className="card">
        <h2>{symbol}</h2>
        <p>{name}</p>
        <p>{price}</p>
        <p>{priceChange}</p>
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
export default CoinDetailPage;

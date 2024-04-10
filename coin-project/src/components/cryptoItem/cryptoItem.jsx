import "../../App.jsx";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const CryptoItem = ({ name, symbol, price, priceChange, id }) => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const nav = useNavigate();
  function goto(id) {
    nav(`/coins/${id}`);
  }

  // function removeFavorite(id) {
  //   const updatedFavorites = favorites.filter((f) => f !== id);
  //   localStorage.setItem(JSON.stringify(updatedFavorites));
  //   setFavorites(updatedFavorites);
  // }()

  function toggleFavorite(id) {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites.includes(id)) {
      const updated = favorites.filter((f) => f !== id);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFavorites(updated);
    } else {
      const updated = favorites.concat([id]);
      localStorage.setItem("favorites", JSON.stringify(updated));
      setFavorites(updated);
    }
  }

  return (
    <div className="full">
      <li>
        <div onClick={() => goto(id)}>
          <h2>{symbol}</h2>
          <p>{name}</p>
        </div>
        <div onClick={() => goto(id)}>
          <p>{Math.round(price * 1000) / 1000}</p>
          <p className={priceChange > 0 ? "green" : "red"}>
            {Math.round(priceChange * 100) / 100}%
          </p>
        </div>
        <div>
          <div
            className={favorites.includes(id) ? "red" : "white"}
            onClick={() => toggleFavorite(id)}
          >
            &#10084;
          </div>
        </div>
      </li>
    </div>
  );
};
export default CryptoItem;

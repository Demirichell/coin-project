import { useState, useEffect } from "react";

const GetFav = () => {
  const [favorites, setFavorites] = useState("");

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites"));
    if (favorites) {
      setFavorites(favorites);
    }
  }, []);

  return <>{favorites}</>;
};
export default GetFav;

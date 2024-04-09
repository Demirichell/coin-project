import { useState, useEffect } from "react";

const Form1 = () => {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <form>
      <input
        type="text"
        value={favorites}
        onChange={(e) => setFavorites(e.target.value)}
        placeholder="Full name"
        aria-label="fullname"
      />
      <input type="submit" value="Submit"></input>
    </form>
  );
};

export default Form1;

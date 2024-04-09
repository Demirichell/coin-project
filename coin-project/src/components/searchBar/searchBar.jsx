import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ data }) => {
  const nav = useNavigate();

  return (
    <>
      <ReactSearchAutocomplete
        onSelect={(item) => {
          nav(`/coins/${item.id}`);
        }}
        maxResults={5}
        placeholder="Search"
        items={data.map((coins) => {
          return { id: coins.id, name: coins.name };
        })}
      />
      <div style={{ marginTop: 20 }}></div>
    </>
  );
};

export default SearchBar;

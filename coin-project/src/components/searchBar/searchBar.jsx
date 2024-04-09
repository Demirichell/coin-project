import { ReactSearchAutocomplete } from "react-search-autocomplete";

import { Link } from "react-router-dom";

const SearchBar = ({ data }) => {
  const handleOnSearch = (string, results) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    console.log(string, results);
  };

  const handleOnHover = (result) => {
    // the item hovered
    console.log(result);
  };

  const handleOnSelect = (item) => {
    // the item selected
    console.log(item);
  };

  const handleOnFocus = () => {
    console.log("Focused");
  };

  const formatResult = (item) => {
    return (
      <Link to={`/coins/${crypto.id}`}>
        <>
          <span style={{ display: "block", textAlign: "left" }}>
            {item.symbol}
            {item.name}
          </span>
        </>
      </Link>
    );
  };
  return (
    <>
      <ReactSearchAutocomplete
        items={data}
        onSearch={handleOnSearch}
        onHover={handleOnHover}
        onSelect={handleOnSelect}
        onFocus={handleOnFocus}
        formatResult={formatResult}
        styling={{ zIndex: 4 }}
        autoFocus
      />
      <div style={{ marginTop: 20 }}></div>
    </>
  );
};

export default SearchBar;

import { useState } from "react";
import { SearchInput } from "./Search.styled";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div>
      <SearchInput
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Search;

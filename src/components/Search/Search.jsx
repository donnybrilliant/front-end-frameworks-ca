import { useState } from "react";
import { SearchInput, Autocomplete, SearchContainer } from "./Search.styled";
import { Link } from "react-router-dom";

const Search = ({ onSearch, products }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <SearchContainer>
      <SearchInput
        id="search"
        name="search"
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
      ></SearchInput>
      {query && (
        <Autocomplete>
          {products.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </Autocomplete>
      )}
    </SearchContainer>
  );
};

export default Search;

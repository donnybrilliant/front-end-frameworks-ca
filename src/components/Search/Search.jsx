import { useState, useRef, useEffect } from "react";
import { SearchInput, Autocomplete, SearchContainer } from "./Search.styled";
import { Link } from "react-router-dom";

const Search = ({ onSearch, products }) => {
  const [query, setQuery] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const containerRef = useRef(null);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowAutocomplete(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [containerRef]);

  return (
    <SearchContainer ref={containerRef}>
      <SearchInput
        id="search"
        name="search"
        type="search"
        placeholder="Search products..."
        value={query}
        onChange={handleInputChange}
        onFocus={() => setShowAutocomplete(true)}
        onBlur={() => setTimeout(() => setShowAutocomplete(false), 100)}
      ></SearchInput>
      {showAutocomplete && (
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

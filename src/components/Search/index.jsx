import { useState, useRef, useEffect } from "react";
import { SearchInput, Autocomplete, SearchContainer } from "./styled";
import { Link } from "react-router-dom";

// Component to display the search bar with autocomplete
const Search = ({ onSearch, products }) => {
  const [query, setQuery] = useState("");
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const containerRef = useRef(null);

  // Function to handle the input change
  const handleInputChange = (event) => {
    setQuery(event.target.value);
    onSearch(event.target.value);
  };

  // Add an event listener to the document to close the autocomplete when the user clicks outside of it
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
        autoComplete="off"
        value={query}
        onChange={handleInputChange}
        onFocus={() => setShowAutocomplete(true)}
        onBlur={() => setTimeout(() => setShowAutocomplete(false), 100)}
      ></SearchInput>
      {showAutocomplete && products.length > 0 && (
        <Autocomplete>
          {products.map((product) => (
            <Link to={`/product/${product.id}`} key={product.id}>
              <li>{product.title} </li>
            </Link>
          ))}
        </Autocomplete>
      )}
    </SearchContainer>
  );
};

export default Search;

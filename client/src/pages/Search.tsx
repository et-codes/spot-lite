import axios from "axios";
import { useState } from "react";
import SearchForm from "../components/SearchForm";

const Search = (): JSX.Element => {
  const [searchResults, setSearchResults] = useState({});

  const handleSearch = (searchTerm: string): void => {
    console.log(`Searching for ${searchTerm}...`);
  };

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
    </>
  );
};

export default Search;

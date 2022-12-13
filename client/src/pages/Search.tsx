import axios from "axios";
import { useState } from "react";
import SearchForm from "../components/SearchForm";

const Search = (): JSX.Element => {
  const [searchResults, setSearchResults] =
    useState<SpotifyApi.ArtistsAlbumsResponse | null>(null);

  const handleSearch = async (
    searchTerm: string,
    searchType: string
  ): Promise<void> => {
    try {
      const response = await axios.get(`/api/${searchType}/${searchTerm}`);
      setSearchResults(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {searchResults ? JSON.stringify(searchResults) : null}
    </>
  );
};

export default Search;

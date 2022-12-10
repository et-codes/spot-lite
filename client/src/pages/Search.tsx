import axios from "axios";
import { useState } from "react";
import SearchForm from "../components/SearchForm";

const Search = (): JSX.Element => {
  const [searchResults, setSearchResults] =
    useState<SpotifyApi.ArtistsAlbumsResponse | null>(null);

  const handleSearch = async (searchTerm: string): Promise<void> => {
    console.log(`Searching for ${searchTerm}...`);
    const response = await axios.get(`/api/search/${searchTerm}`);
    console.log(response.data);
    setSearchResults(response.data);
  };

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {searchResults ? JSON.stringify(searchResults) : null}
    </>
  );
};

export default Search;

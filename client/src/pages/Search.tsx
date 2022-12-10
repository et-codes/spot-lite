import axios from "axios";
import { useState } from "react";
import SearchForm from "../components/SearchForm";

// SpotifyApi.ArtistsAlbumsResponse

const Search = (): JSX.Element => {
  const [searchResults, setSearchResults] = useState({});

  const handleSearch = async (searchTerm: string): Promise<void> => {
    console.log(`Searching for ${searchTerm}...`);
    const response = await axios.get(`/api/search/${searchTerm}`);
    console.log(response.data);
    setSearchResults(response.data);
  };

  return (
    <>
      <SearchForm handleSearch={handleSearch} />
      {JSON.stringify(searchResults)}
    </>
  );
};

export default Search;

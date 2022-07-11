import React, {useState} from "react";

function Search({onSubmit}) {

  const [searchBar, setSearchBar] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(searchBar);
    setSearchBar("")
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

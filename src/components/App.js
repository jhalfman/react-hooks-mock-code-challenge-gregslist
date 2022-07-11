import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([]);
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => {setListings(data); setSearchList(data)});
  }, [])

  function handleDelete(id) {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then(resp=>resp.json())
    .then(() => console.log("deleted"))
    const updatedListings = listings.filter(listing => listing.id !== id);
    setListings(updatedListings);
    setSearchList(updatedListings);
  }

  function onSubmit(search) {
    const newSearchList = listings.filter(listing => listing.description.toLowerCase().includes(search.toLowerCase()));
    setSearchList(newSearchList);
  }

  return (
    <div className="app">
      <Header onSubmit={onSubmit}/>
      <ListingsContainer listings={listings} handleDelete={handleDelete} searchList={searchList}/>
    </div>
  );
}

export default App;

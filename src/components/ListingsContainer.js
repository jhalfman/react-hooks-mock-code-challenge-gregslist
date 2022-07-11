import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({searchList, handleDelete}) {
  return (
    <main>
      <ul className="cards">
        {searchList.map(listing => {
          return <ListingCard key={listing.description} listing={listing} handleDelete={handleDelete}/>
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;

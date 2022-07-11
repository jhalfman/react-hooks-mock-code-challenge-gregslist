import React, {useState} from "react";

function ListingCard({listing: {description, image, location, id}, handleDelete}) {

  const [like, setLike] = useState(false)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={"description"} />
      </div>
      <div className="details">
        {like ? (
          <button onClick={() => setLike(!like)} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={() => setLike(!like)} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={() => handleDelete(id)}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;

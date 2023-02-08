import * as React from "react";
import { FaHeart } from "react-icons/fa";

const Card = ({
  id,
  name,
  img,
  fav,
  cardsValues,
  setCardsValues,
  favToggleChange,
}) => {
  const url = "url(" + img + ")";

  return (
    <div className="card-style">
      <div
        className="card-img"
        style={{ backgroundImage: url, backgroundSize: "100% 100%" }}
      >
        <h2 onClick={() => favToggleChange(id)}>
          {fav ? (
            <FaHeart color="#c95c72" />
          ) : (
            <FaHeart className="heart-border" color="#fcdfad" />
          )}
        </h2>
      </div>
      <h2 className="card-name">{name}</h2>
    </div>
  );
};

export default Card;

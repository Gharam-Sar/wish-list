import * as React from "react";
import { FaHeart } from "react-icons/fa";
import Backdrop from "./Backdrop";

const Card = ({ key, card, cardsValues, setCardsValues }) => {
  const url = `url(${card.img})`;
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  const handleBackdropOpen = () => {
    setOpenBackdrop(true);
  };

  const handleBackdropClose = () => {
    setOpenBackdrop(false);
  };

  const addToFavourites = (id) => {
    if (cardsValues[id - 1].fav) {
      handleBackdropOpen();
    } else {
      const mappedCards = cardsValues.map((card) =>
        card.id === id ? { ...card, fav: true } : card
      );
      setCardsValues(mappedCards);
      localStorage.setItem("Cards", JSON.stringify(mappedCards));
    }
  };
  return (
    <div>
      <div className="card-style">
        <div
          onClick={() => addToFavourites(card.id)}
          className="card-img"
          style={{ backgroundImage: url, backgroundSize: "100% 100%" }}
        >
          <h2>
            <FaHeart color={card.fav ? "#c95c72" : "#fcdfad"} />
          </h2>
        </div>
        <h2 className="card-name">{card.name} </h2>
      </div>
      {openBackdrop ? (
        <Backdrop handleBackdropClose={handleBackdropClose} />
      ) : (
        <></>
      )}

      <div>
        <div></div>
      </div>
    </div>
  );
};

export default Card;

import * as React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const Favourite = ({ key, card, cardsValues, setCardsValues }) => {
  const removeFromFavourites = (id) => {
    const mappedCards = cardsValues.map((card) =>
      card.id === id ? { ...card, fav: false } : card
    );
    setCardsValues(mappedCards);
    localStorage.setItem("Cards", JSON.stringify(mappedCards));
  };
  return (
    <div>
      <div className="fav-style">
        <h2 className="fav-img col">
          <FaRegTrashAlt
            onClick={() => removeFromFavourites(card.id)}
            color="#55555F"
          />
        </h2>
        <h2 className="fav-name col">{card.name}</h2>
        <h2 className="fav-name col">{card.time}</h2>
        <h2 className="fav-name col">{card.tickets}</h2>
        <h2 className="fav-link col">
          <button
            className="fav-btn"
            onClick={() =>
              window.open("https://codingbeautydev.com", "_blank", "noreferrer")
            }
          >
            Booking
          </button>
        </h2>
      </div>
    </div>
  );
};

export default Favourite;

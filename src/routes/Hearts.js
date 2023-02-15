import React from "react";
import Favourite from "../components/Favourite";

const Hearts = ({ cardsValues, setCardsValues }) => {
  const favCards = cardsValues.filter((card) => card.fav === true);
  var favCardsExist = false;
  if (favCards.length > 0) favCardsExist = true;
  return (
    <div>
      <div className="page-title">Destinations you Liked</div>
      {favCardsExist ? (
        <div className="fav-display">
          <div className="fav-style">
            <h2 className="fav-img header"></h2>
            <h2 className="fav-name header">Destination Name</h2>
            <h2 className="fav-time header">Trip Duration</h2>
            <h2 className="fav-tickets header">Available Tickets</h2>
            <h2 className="fav-link header">Trip Link</h2>
          </div>
          {favCards.map((card, index) => (
            <Favourite
              key={card.id}
              card={card}
              cardsValues={cardsValues}
              setCardsValues={setCardsValues}
            />
          ))}
        </div>
      ) : (
        <div className="hearts-empty">
          You Should Browse Our Destinations to Find the Ones you Like
        </div>
      )}
    </div>
  );
};
export default Hearts;

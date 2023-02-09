import React from "react";
import Card from "../components/Card";

const Hearts = ({ cardsValues, setCardsValues, favToggleChange }) => {
  const favCards = cardsValues.filter((card) => card.fav === true);
  var favCardsExist = false;
  if (favCards.length > 0) favCardsExist = true;
  return (
    <div>
      <div className="page-title">Destinations you Liked</div>
      {favCardsExist ? (
        <div className="cards-display">
          {favCards.map((card, index) => (
            <Card
              card={card}
              cardsValues={cardsValues}
              setCardsValues={setCardsValues}
              favToggleChange={favToggleChange}
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

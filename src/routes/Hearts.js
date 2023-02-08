import React from "react";
import Card from "../components/Card";

const Hearts = ({ cardsValues, setCardsValues, favToggleChange }) => {
  const favCards = cardsValues.filter((card) => card.fav === true);
  return (
    <div className="cards-display">
      {favCards.map((card, index) => (
        <Card
          id={card.id}
          name={card.name}
          img={card.img}
          fav={card.fav}
          cardsValues={cardsValues}
          setCardsValues={setCardsValues}
          favToggleChange={favToggleChange}
        />
      ))}
    </div>
  );
};
export default Hearts;

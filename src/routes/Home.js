import React from "react";
import Card from "../components/Card";

const Home = ({ cardsValues, setCardsValues, favToggleChange }) => {
  return (
    <div className="cards-display">
      {cardsValues.map((card, index) => (
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
export default Home;

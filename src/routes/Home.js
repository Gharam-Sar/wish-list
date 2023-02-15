import React from "react";
import Card from "../components/Card";

const Home = ({ cardsValues, setCardsValues }) => {
  return (
    <div>
      <div className="page-title">Destinations Available at the Moment</div>
      <div className="cards-display">
        {cardsValues.map((card) => (
          <Card
            key={card.id}
            card={card}
            cardsValues={cardsValues}
            setCardsValues={setCardsValues}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;

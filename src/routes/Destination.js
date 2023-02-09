import React from "react";
import Card from "../components/Card";

const Destination = ({
  cardsValues,
  setCardsValues,
  favToggleChange,
  handleBackdopClose,
  handleBackdopToggle,
  openBackdrop,
  setOpenBackdrop,
}) => {
  return (
    <div>
      <div className="page-title">Destinations Available at the Moment</div>

      <div className="cards-display">
        {cardsValues.map((card, index) => (
          <Card
            card={card}
            cardsValues={cardsValues}
            setCardsValues={setCardsValues}
            favToggleChange={favToggleChange}
          />
        ))}
      </div>
    </div>
  );
};
export default Destination;

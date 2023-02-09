import * as React from "react";
import { FaHeart } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import Button from "@mui/material/Button";

import Backdrop from "@mui/material/Backdrop";
const Card = ({ card, cardsValues, setCardsValues, favToggleChange }) => {
  const url = "url(" + card.img + ")";

  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const handleBackdopClose = () => {
    setOpenBackdrop(false);
  };
  const handleBackdopToggle = () => {
    setOpenBackdrop(!openBackdrop);
  };

  return (
    <div>
      <div className="card-style">
        <div
          className="card-img"
          style={{ backgroundImage: url, backgroundSize: "100% 100%" }}
        >
          <h2 onClick={() => favToggleChange(card.id)}>
            {card.fav ? (
              <FaHeart color="#c95c72" />
            ) : (
              <FaHeart color="#fcdfad" />
            )}
          </h2>
        </div>
        <h2 className="card-name">
          {card.name}{" "}
          <span>
            {" "}
            <FaInfoCircle
              onClick={handleBackdopToggle}
              color="#c95c72"
              fontSize="25px"
            />{" "}
          </span>
        </h2>
      </div>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleBackdopClose}
      >
        <div className="backdrop">
          <div>{card.name}</div>
          <div>{card.tickets} Tickets Per Trip</div>
          <div>Duration {card.time}</div>
          <div>
            <Button
              sx={{
                backgroundColor: "#65647C",
                color: "white",
                fontWeight: "bold",
                ":hover": {
                  backgroundColor: "#85586F",
                },
              }}
            >
              Pock Trip Now
            </Button>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default Card;

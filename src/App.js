import Navbar from "./components/Navbar";
import Hearts from "./routes/Hearts";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import cards from "./utilities";
import React from "react";
const App = () => {
  const [cardsValues, setCardsValues] = React.useState(cards);

  const favToggleChange = (id) => {
    const mappedCards = cardsValues.map((card) =>
      card.id === id ? { ...card, fav: !card.fav } : card
    );

    setCardsValues(mappedCards);
    // localStorage.setItem("todo", JSON.stringify(mappedTasks));
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                cardsValues={cardsValues}
                setCardsValues={setCardsValues}
                favToggleChange={favToggleChange}
              />
            }
          />
          <Route
            path="/MyList"
            element={
              <Hearts
                cardsValues={cardsValues}
                setCardsValues={setCardsValues}
                favToggleChange={favToggleChange}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};
export default App;

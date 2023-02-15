import Navbar from "./components/Navbar";
import Hearts from "./routes/Hearts";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";
import cards from "./cardList";
import React from "react";

const App = () => {
  const [cardsValues, setCardsValues] = React.useState(cards);
  const [openBackdrop, setOpenBackdrop] = React.useState(false);

  React.useEffect(() => {
    const localStorageCards = JSON.parse(localStorage.getItem("Cards"));

    if (Boolean(localStorageCards)) {
      setCardsValues(localStorageCards);
    }
  }, []);

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
                openBackdrop={openBackdrop}
                setOpenBackdrop={setOpenBackdrop}
              />
            }
          />

          <Route
            path="/MyList"
            element={
              <Hearts
                cardsValues={cardsValues}
                setCardsValues={setCardsValues}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};
export default App;

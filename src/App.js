import Navbar from "./components/Navbar";
import Hearts from "./routes/Hearts";
import Home from "./routes/Home";
import Destination from "./routes/Destination";
import Products from "./routes/Products";
import { Route, Routes } from "react-router-dom";
import cards from "./CardUtilities";
import products from "./ProductUtilities";
import React from "react";

const App = () => {
  const [cardsValues, setCardsValues] = React.useState(cards);
  const [productsValues, setProductsValues] = React.useState(products);
  const favToggleChange = (id) => {
    const mappedCards = cardsValues.map((card) =>
      card.id === id ? { ...card, fav: !card.fav } : card
    );

    setCardsValues(mappedCards);
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
                productsValues={productsValues}
                setProductsValues={setProductsValues}
              />
            }
          />
          <Route
            path="/Destinations"
            element={
              <Destination
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
          <Route
            path="/Products"
            element={
              <Products
                productsValues={productsValues}
                setProductsValues={setProductsValues}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
};
export default App;

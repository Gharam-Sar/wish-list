import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import { Link } from "react-router-dom";

const Home = ({
  cardsValues,
  setCardsValues,
  favToggleChange,
  productsValues,
  setProductsValues,
}) => {
  const cardImages = [
    { url: cardsValues[8].img },
    { url: cardsValues[12].img },
    { url: cardsValues[2].img },
    { url: cardsValues[3].img },
    { url: cardsValues[5].img },
  ];
  const productImages = [
    { url: productsValues[8].img },
    { url: productsValues[11].img },
    { url: productsValues[5].img },
    { url: productsValues[3].img },
  ];
  return (
    <div>
      <div className="home-page-slider">
        <SimpleImageSlider
          width={1100}
          height={650}
          images={cardImages}
          showBullets={true}
          showNavs={false}
          autoPlay={true}
        />
      </div>
      <div className="home-ads-about">
        <Link to="/Destinations">
          <div className="home-ads-about-section plane-background">
            <div className="home-ads-about-title">Are You Ready</div>
            <div className="home-ads-about-content">
              To Find Your Perfect Place ?
            </div>
          </div>
        </Link>

        <Link to="/Products">
          <div className="home-ads-about-section">
            <div className="home-ads-about-title">
              Products For Your Trips ?
            </div>
            <div className="home-ads-about-content">
              <SimpleImageSlider
                width={400}
                height={280}
                images={productImages}
                showBullets={true}
                showNavs={false}
                autoPlay={true}
                bgColor="none"
              />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Home;

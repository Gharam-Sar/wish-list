import * as React from "react";
import Button from "@mui/material/Button";

import Backdrop from "@mui/material/Backdrop";
const Product = ({ product, productsValues, setProductsValues }) => {
  const url = "url(" + product.img + ")";
  const [openBackdrop, setOpenBackdrop] = React.useState(false);
  const handleBackdopClose = () => {
    setOpenBackdrop(false);
  };
  const handleBackdopToggle = () => {
    setOpenBackdrop(!openBackdrop);
  };
  return (
    <div>
      <div onClick={handleBackdopToggle} className="product-style">
        <div
          className="product-img"
          style={{ backgroundImage: url, backgroundSize: "100% 100%" }}
        ></div>
        <h2 className="product-name">{product.name} </h2>
      </div>
      <Backdrop
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleBackdopClose}
      >
        <div className="backdrop">
          <div>{product.name}</div>
          <div>
            {product.stock ? "Available" : "Not Available At The Moment"}
          </div>
          <div>Price: {product.price}</div>
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
              purchase Items Now
            </Button>
          </div>
        </div>
      </Backdrop>
    </div>
  );
};

export default Product;

import React from "react";
import Product from "../components/Product";

const Products = ({ productsValues, setProductsValues }) => {
  return (
    <div>
      <div className="page-title">Products</div>

      <div className="cards-display">
        {productsValues.map((product, index) => (
          <Product
            product={product}
            productsValues={productsValues}
            setProductsValues={setProductsValues}
          />
        ))}
      </div>
    </div>
  );
};
export default Products;

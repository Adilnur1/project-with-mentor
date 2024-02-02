import React from "react";
import ProductList from "../components/product/ProductList";

const ProductPage = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <ProductList />
    </div>
  );
};

export default ProductPage;

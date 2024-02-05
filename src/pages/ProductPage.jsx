import React from "react";
import ProductList from "../components/product/ProductList";

const ProductPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        // maxWidth: "1200px",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <ProductList />
    </div>
  );
};

export default ProductPage;

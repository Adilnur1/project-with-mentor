import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box } from "@mui/material";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrapp: "wrapp",
        }}
      >
        {products.map((elem) => (
          <ProductCard elem={elem} key={elem.id} />
        ))}
      </Box>
    </div>
  );
};

export default ProductList;

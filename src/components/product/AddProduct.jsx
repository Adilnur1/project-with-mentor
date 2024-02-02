import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const AddProduct = () => {
  const { addProduct } = useProducts();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
      console.log(e.target.name);
      const obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      const obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  const handleClick = () => {
    addProduct(product);
    setProduct({
      ...product,
      title: "",
      description: "",
      price: 0,
      image: "",
    });
  };
  return (
    <Box
      sx={{
        width: "70vh",
        height: 500,
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" align="center">
        ADMIN PAGE
      </Typography>
      <TextField
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        fullWidth
        name="description"
        label="Description"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        fullWidth
        name="image"
        label="Image"
        variant="outlined"
        onChange={handleInput}
      />
      <Button fullWidth onClick={handleClick}>
        ADD PRODUCT
      </Button>
    </Box>
  );
};

export default AddProduct;

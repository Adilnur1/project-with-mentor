import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, TextField, Typography } from "@mui/material";

const EditProduct = () => {
  const { id } = useParams();
  const { getOneProduct, oneProduct, editProduct } = useProducts();
  useEffect(() => {
    getOneProduct(id);
  }, []);
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  const handleInput = (e) => {
    if (e.target.name === "price") {
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
    editProduct(id, product);
  };
  useEffect(() => {
    if (oneProduct) {
      setProduct(oneProduct);
    }
  }, [oneProduct]);
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
        EDIT PRODUCT
      </Typography>
      <TextField
        value={product.title}
        fullWidth
        name="title"
        label="Title"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        value={product.description}
        fullWidth
        name="description"
        label="Description"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        value={product.price}
        fullWidth
        name="price"
        label="Price"
        variant="outlined"
        onChange={handleInput}
      />
      <TextField
        value={product.image}
        fullWidth
        name="image"
        label="Image"
        variant="outlined"
        onChange={handleInput}
      />
      <Button fullWidth onClick={handleClick}>
        SAVE
      </Button>
    </Box>
  );
};

export default EditProduct;

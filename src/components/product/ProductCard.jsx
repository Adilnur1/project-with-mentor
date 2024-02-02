import { AddShoppingCart } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  IconButton,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Detail from "./Detail";
import { useProducts } from "../context/ProductContextProvider";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ elem }) => {
  const { deleteProduct } = useProducts();
  const [open, setOpen] = useState();
  const navigate = useNavigate();
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Card
      sx={{
        height: 450,
        boxShadow: "none",
        margin: "2%",
        width: { md: "30vw", lg: "19vw" },
      }}
    >
      <CardActionArea onClick={handleOpen}>
        <CardMedia sx={{ height: 240, borderRadius: 4 }} image={elem.image} />
      </CardActionArea>
      <CardContent
        sx={{
          padding: "20px 5px 0px 5px",
        }}
      >
        <Typography variant="h5" fontSize="20" fontWeight={700}>
          {elem.title}
        </Typography>
        <Stack>
          <Rating name="half-rating" defaultValue={0} precision={1} />
        </Stack>
        <Typography color="black" fontSize="15px" fontWeight={700}>
          {elem.description}
        </Typography>
        <Typography color="black" fontSize="24px" fontWeight={700}>
          {elem.price}$
        </Typography>
        <Button
          onClick={() => deleteProduct(elem.id)}
          color="secondary"
          size="medium"
          variant="outlined"
        >
          Delete
        </Button>
        <Button
          onClick={() => navigate(`/edit/${elem.id}`)}
          color="primary"
          size="medium"
          variant="outlined"
        >
          Edit
        </Button>
        <IconButton>
          <AddShoppingCart />
        </IconButton>
      </CardContent>
      <Detail open={open} handleClose={handleClose} elem={elem} />
    </Card>
  );
};

export default ProductCard;

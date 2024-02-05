import React, { useState } from "react";
import { useProducts } from "../context/ProductContextProvider";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";

const AddCategoty = () => {
  const style = {
    position: "absolute",
    top: "20%",
    left: "30%",
    width: 700,
    display: "flex",
    // border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    align: "items",
    p: 4,
  };
  const { createCategory } = useProducts();
  const [category, setCategory] = useState();
  const handleClick = () => {
    if (!category) {
      alert("Заполните поле");
    } else {
      const newCategory = {
        name: category,
      };
      createCategory(newCategory);
    }
  };
  return (
    <div>
      {/* <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      > */}
      <Box sx={style}>
        <Typography id="modal-modal-title">Добавить новую категорию</Typography>
        <TextField
          fullWidth
          variant="outlined"
          onChange={(e) => setCategory(e.target.value)}
        />
        <Button onClick={handleClick}>Добавить</Button>
        <Button>Отменить</Button>
      </Box>
      {/* </Modal> */}
    </div>
  );
};

export default AddCategoty;

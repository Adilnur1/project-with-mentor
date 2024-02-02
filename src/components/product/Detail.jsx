import { Box, Modal } from "@mui/material";
import React from "react";

const Detail = (props) => {
  const style = {
    position: "absolute",
    top: "20%",
    left: "30%",
    width: 700,
    display: "flex",
    border: "2px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 4,
  };
  const { elem, open, handleClose } = props;
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
      sx={{ cursor: "pointer" }}
    >
      <Box sx={style}>
        <div>
          <img
            width={300}
            src={elem.image}
            alt={elem.image}
            onClick={handleClose}
          />
        </div>
        <div>
          <h1>{elem.title}</h1>
          <p>{elem.description}</p>
          <p>{elem.price}$</p>
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;

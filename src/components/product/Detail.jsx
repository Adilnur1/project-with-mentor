import { Box, Modal, TextField } from "@mui/material";
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
    align: "items",
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
        <div style={{ margin: "30px" }}>
          <h1>{elem.title}</h1>
          <p style={{ marginTop: "10px" }}>{elem.description}</p>
          <p>{elem.price}$</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dolor
            quae quaerat in maiores distinctio nam suscipit tempore mollitia?
            Consequuntur excepturi aliquam quod quia fuga quas eius eum deserunt
            ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
            dolor quae quaerat in maiores distinctio nam suscipit tempore
            mollitia? Consequuntur excepturi aliquam quod quia fuga quas eius
            eum deserunt ex.
          </p>
          <TextField
            style={{ marginTop: "10px" }}
            label="Можете оставить комментарий"
          />
        </div>
      </Box>
    </Modal>
  );
};

export default Detail;

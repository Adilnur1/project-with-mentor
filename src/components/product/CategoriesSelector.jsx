import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const CategoriesSelector = (props) => {
  const { categories, handleInput } = props;
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Choose Categories</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Categories"
          name="categories"
          onChange={handleInput}
        >
          {categories.map((elem) => (
            <MenuItem key={elem.id} {...elem} value={elem.name}>
              {elem.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategoriesSelector;

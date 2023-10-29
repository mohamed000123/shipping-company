import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({ handleDropdownChange, selectedValue }) {
  return (
    <Box sx={{ minWidth: 120, maxWidth: 400, marginBottom: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedValue}
          label="Age"
          onChange={handleDropdownChange}
        >
          <MenuItem value="created">created</MenuItem>
          <MenuItem value="pickedUp">pickedUp</MenuItem>
          <MenuItem value="delivered">delivered</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

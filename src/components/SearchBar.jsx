import React from "react";
import { TextField } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery, resetFilter }) => {
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    if (typeof resetFilter === "function") {
      resetFilter();
    }
  };

  return (
    <TextField
      placeholder="Search Category / Subitem"
      variant="outlined"
      size="small"
      value={searchQuery}
      onChange={handleChange}
      sx={{ backgroundColor: "#fff", borderRadius: 1, minWidth: 200 }}
    />
  );
};

export default SearchBar;

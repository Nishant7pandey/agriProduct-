import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./styles.css";

function Search({ search, setSearch }) {
  return (
    <div className="search-box">
      <SearchIcon sx={{ color: "var(--grey) !important" }} />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="text"
        placeholder="Search by Name or Catagory"
      />
    </div>
  );
}

export default Search;

import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const BarStyle = {
    width: "40rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem",
    marginTop: "2%",
  };
  return (
    <input
      className="search-bar"
      style={BarStyle}
      key="search-bar"
      value={searchTerm}
      placeholder={"Search Items"}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
};

export default SearchBar;

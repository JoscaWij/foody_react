import React from "react";
import styled from "@emotion/styled";

const SearchInput = styled.input`
  margin: 0.5em 0;
  border-style: none;
  border-radius: 20px;
  padding: 0.3em;
  text-align: center;
  min-width: 50%;
  font-size: 1em;
`;

function SearchBar({ onChange }) {
  return (
    <SearchInput
      placeholder="Search for recipe"
      onChange={(event) => onChange(event.target.value)}
    />
  );
}

export default SearchBar;

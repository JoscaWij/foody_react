import React from "react";
import styled from "@emotion/styled";

const ListContainer = styled.div`
  background-color: white;
  height: 100%;
  padding: 0 1em;
  overflow: auto;
`;

function List({ children }) {
  return <ListContainer>{children}</ListContainer>;
}

export default List;

import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 400px;
  border: none;
  border-radius: 8px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 20px;
  background: '#fff';
`;

function Card({children}) {
  return <CardContainer>{children}</CardContainer>;
}

export default Card;

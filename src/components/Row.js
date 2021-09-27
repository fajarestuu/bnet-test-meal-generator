import React from "react";
import styled from "styled-components";

const StyledRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${(props) => (props.additionalStyle ? props.additionalStyle : "")}
`;

export default function Row({ additionalStyle, children }) {
  return <StyledRow style={additionalStyle}>{children}</StyledRow>;
}

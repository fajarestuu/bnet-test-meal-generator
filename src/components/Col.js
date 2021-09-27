import React from "react";
import styled from "styled-components";

const StyledCol = styled.div`
  width: ${(props) => (props.width ? 100 / props.width + "%" : "100%")};
  display: flex;
  flex-direction: column;
  ${(props) => (props.additionalStyle ? props.additionalStyle : "")}
`;

export default function Col({ additionalStyle, children, ...props }) {
  return (
    <StyledCol {...props} style={additionalStyle}>
      {children}
    </StyledCol>
  );
}

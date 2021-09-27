import React from "react";
import styled from "styled-components";
import { COLOR } from "../constant";

const StyledButton = styled.button`
  font-weight: 400;
  text-align: center;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  font-family: "Poppins", sans-serif;
  border: 1px solid transparent;
  margin-block: 0.5rem;
  margin-inline: 0.5rem;
`;

const ButtonPrimary = styled(StyledButton)`
  background-color: ${COLOR.primary};
`;
const ButtonOutline = styled(StyledButton)`
  background-color: transparent;
  border-color: white;
`;

export default function Button({ style, children, state, ...props }) {
  switch (state) {
    case "primary":
      return (
        <ButtonPrimary {...props} style={style}>
          {children}
        </ButtonPrimary>
      );

      break;
    case "outline":
      return (
        <ButtonOutline {...props} style={style}>
          {children}
        </ButtonOutline>
      );

      break;

    default:
      return (
        <ButtonPrimary {...props} style={style}>
          {children}
        </ButtonPrimary>
      );
      break;
  }
}

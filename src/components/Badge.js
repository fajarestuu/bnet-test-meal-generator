import React from "react";
import styled from "styled-components";
import { COLOR } from "../constant";

const StyledBadge = styled.button`
  font-weight: 400;
  text-align: center;
  border-radius: 0.25rem;
  font-size: 1rem;
  cursor: pointer;
  color: ${COLOR.primary};
  font-family: "Poppins", sans-serif;
  border: 1px solid;
  border-color: ${COLOR.primary};
  margin-block: 0.5rem;
  margin-inline: 0.5rem;
  &:hover {
    background-color: ${COLOR.primary};
    color: white;
  }
`;

const BadgeActive = styled(StyledBadge)`
  background-color: ${COLOR.primary};
  color: white;
`;
export default function Badge({ state, children, ...props }) {
  switch (state) {
    case "active":
      return <BadgeActive {...props}>{children}</BadgeActive>;

      break;

    default:
      return <StyledBadge {...props}>{children}</StyledBadge>;
      break;
  }
}

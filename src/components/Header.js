import React from "react";
import styled from "styled-components";
import { COLOR } from "../constant";
import Col from "./Col";

const StyledHeader = styled.header`
  min-height: 3rem;
  background-color: ${COLOR.primary};
  display: flex;
  align-items: center;
  padding-left: 5%;
  padding-right: 5%;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Col>
        <span style={{ color: "white" }}>Meal Generator</span>
      </Col>
    </StyledHeader>
  );
}

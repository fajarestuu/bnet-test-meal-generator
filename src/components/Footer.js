import React from "react";
import styled from "styled-components";
import { COLOR } from "../constant";

const StyledFooter = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: ${COLOR.secondary};
  color: white;
  text-align: center;
`;
export default function Footer() {
  return <StyledFooter>Made with ❤ Muhammad Fajar Estu Nugroho</StyledFooter>;
}

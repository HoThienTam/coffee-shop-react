import React from "react";
import { StyledLink } from "./styles";
const NavItem = ({href, children }) => {
  return (
    <li>
      <StyledLink href={href}>{children}</StyledLink>
    </li>
  );
};

export default NavItem;

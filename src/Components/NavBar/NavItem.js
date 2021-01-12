import React from "react";
import { StyledLink } from "./styles";
const NavItem = ({ active, href, children }) => {
  return (
    <li>
      <StyledLink href={href} active={active}>{children}</StyledLink>
    </li>
  );
};

export default NavItem;

import React from "react";
import NavItem from "./NavItem";
import { NavBar, Logo, NavMenu } from "./styles";

const NavigationBar = ({inverse}) => {
  return (
    <NavBar>
      <Logo href="./" inverse={inverse}>
        <span>Landing</span> Page
      </Logo>
      <NavMenu inverse={inverse}>
        <NavItem>Home</NavItem>
        <NavItem>Feature</NavItem>
        <NavItem>About me</NavItem>
        <NavItem>Pages</NavItem>
        <NavItem>Components</NavItem>
      </NavMenu>
    </NavBar>
  );
};

export default NavigationBar;

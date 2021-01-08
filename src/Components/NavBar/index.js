import React from "react";
import { NavBar, Logo, NavMenu, NavItem } from "./styles";

const NavigationBar = () => {
  return (
    <NavBar>
      <Logo href="./">
        <span>Landing</span> Page
      </Logo>
      <NavMenu>
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

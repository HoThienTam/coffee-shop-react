import React from "react";
import NavItem from "./NavItem";
import { NavBar, Logo, NavMenu } from "./styles";

const NavigationBar = () => {
  return (
    <NavBar>
      <Logo href="./">
        <span>Landing</span> Page
      </Logo>
      <NavMenu>
        <NavItem active>Home</NavItem>
        <NavItem>Feature</NavItem>
        <NavItem>About me</NavItem>
        <NavItem>Pages</NavItem>
        <NavItem>Components</NavItem>
      </NavMenu>
    </NavBar>
  );
};

export default NavigationBar;

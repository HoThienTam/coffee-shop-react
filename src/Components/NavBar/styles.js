import styled from "@emotion/styled";

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.a`
  font-size: 21px;
  color: #fff;
  font-weight: 600;
  letter-spacing: 0.5px;

  > span {
    color: hotpink;
  }
  :hover {
    text-decoration: none;
    color: #fff;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
`;

export const NavItem = styled.li`
  color: #fff;
  padding: 25px 15px;
  font-weight: 400;
  letter-spacing: 1px;
`;

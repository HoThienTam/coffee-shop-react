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
  color: ${(props) => (props.active ? "#00c9a7;" : "#fff;")}
  padding: 25px 15px;
  font-weight: 400;
  letter-spacing: 1px;
  
  :hover {
    color: #00c9a7;
    transition: all ease 0.3s;
    cursor: pointer;
  }
`;

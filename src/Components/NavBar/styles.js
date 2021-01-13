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
  color: ${(props) => (props.inverse ? "hotpink" : "#fff")};

  > span {
    color: ${(props) => (props.inverse ? "black" : "hotpink")};
  }
  :hover {
    text-decoration: none;
    color: ${(props) => (props.inverse ? "hotpink" : "#fff")};
  }
`;

export const StyledLink = styled.a`
  padding: 15px;
  font-weight: 400;
  letter-spacing: 1px;
  display: block;

  :hover {
    color: #00c9a7;
    transition: all ease 0.3s;
    cursor: pointer;
    text-decoration: none;
  }
`;

export const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  a {
    color: ${(props) => (props.inverse ? "black" : "#ffffff")};
  }
`;


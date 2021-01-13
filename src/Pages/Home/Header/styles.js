import styled from "@emotion/styled";

export const HeaderInner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 12px 0;
  z-index: 999;
  transition: all ease 0.3s;

  ${(props) =>
    props.scroll > 0 &&
    `background: #fff;
    box-shadow: 0 1px 10px rgba(22, 28, 45, 0.15);
    top: 0;
    padding: 0;  
    `}
`;

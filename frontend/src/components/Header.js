import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Link>Facespace</Link>
      <P>Sign in</P>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #ffd800;
`;

const Link = styled.a`
  font-family: "Teko", sans-serif;
  font-size: 30px;
  text-decoration: none;
  color: black;
`;

const P = styled.a`
  font-family: "Teko", sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: black;
`;

export default Header;

import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Link href="/">Facespace</Link>
      <P href="/sign-in">Sign in</P>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #353148;
`;

const Link = styled.a`
  font-family: "Teko", sans-serif;
  font-size: 30px;
  text-decoration: none;
  color: #d9c39e;
`;

const P = styled.a`
  font-family: "Teko", sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: #d9c39e;
`;

export default Header;

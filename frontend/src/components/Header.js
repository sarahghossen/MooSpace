import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Header = ({ currentUser, setCurrentUser }) => {
  return (
    <Wrapper>
      <StyledLink to="/">Facespace</StyledLink>
      <P>
        {currentUser ? (
          <Div1>Welcome back, {currentUser.name}</Div1>
        ) : (
          <StyledLink to="/sign-in">Sign in</StyledLink>
        )}
      </P>
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

const StyledLink = styled(Link)`
  font-family: "Teko", sans-serif;
  font-size: 30px;
  text-decoration: none;
  color: #d9c39e;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const Div1 = styled.div`
  font-family: "Teko", sans-serif;
  font-size: 30px;
  padding: 5px 25px 0px 0;
  color: #d9c39e;
`;

const P = styled.div`
  font-family: "Teko", sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: #d9c39e;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default Header;

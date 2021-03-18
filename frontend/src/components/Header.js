import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Header = ({ currentUser, setCurrentUser }) => {
  return (
    <Wrapper>
      <StyledLink to="/">MooSpace</StyledLink>
      <P>
        {currentUser ? (
          <>
            <Button onClick={() => setCurrentUser(undefined)}>
              Welcome back, {currentUser.name} | Sign Out
            </Button>
          </>
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
  background-color: #464f37;
`;

const StyledLink = styled(Link)`
  font-family: "Teko", sans-serif;
  font-size: 30px;
  text-decoration: none;
  color: #b7a260;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const Button = styled.button`
  border: none;
  cursor: pointer;
  text-decoration: none;
  background-color: #464f37;
  color: #b7a260;
  font-family: "Teko", sans-serif;
  font-size: 30px;
  padding: 5px 25px 0px 0;
  color: #b7a260;
`;

const P = styled.div`
  font-family: "Teko", sans-serif;
  font-size: 20px;
  text-decoration: none;
  color: #b7a260;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export default Header;

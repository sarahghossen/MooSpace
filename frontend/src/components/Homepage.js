import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Homepage = ({ users, setUsers }) => {
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      });
  }, []);

  return (
    <>
      <H1>All Facespace members</H1>
      <Everything>
        {users.map((user) => {
          //   console.log(user);
          return (
            <UserDiv>
              <Link href={`/users/${user._id}`}>
                <Img src={user.avatarUrl} alt="Profile pic" />
                <P>{user.name}</P>
              </Link>
            </UserDiv>
          );
        })}
      </Everything>
    </>
  );
};

// const Div = styled.div`
//   background-color: #d9c39e;
//   background-size: cover;
//   height: 100vh;
// `;

const UserDiv = styled.div`
  margin: 5px;
`;

const Everything = styled.div`
  margin: 50px;
  display: flex;
  flex-wrap: wrap;
`;

const Link = styled.a`
  text-decoration: none;
  color: #353148;
`;

const Img = styled.img`
  width: 120px;
  margin: 10px;
  border: 3px solid #d9c39e;
  border-radius: 50%;
  background-color: purple;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const P = styled.p`
  font-family: "Teko", sans-serif;
  width: 60px;
  position: relative;
  width: 100%;
  text-align: center;
  /* align-items: center; */
`;

const H1 = styled.h1`
  color: #353148;
  font-family: "Teko", sans-serif;
  font-size: 50px;
  border-bottom: 1px solid #353148;
  padding-top: 25px;
  padding-left: 30px;
  width: 100%;
  text-align: center;
`;

export default Homepage;

import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Homepage = () => {
  const [users, setUsers] = useState([]);

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

const UserDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
`;

const Everything = styled.div`
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
`;

const Link = styled.a`
  text-decoration: none;
  color: #353148;
`;

const Img = styled.img`
  width: 150px;
  margin: 10px;
  border: 5px solid #353148;
  border-radius: 50%;
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
  font-size: 30px;
  padding-top: 25px;
  padding-left: 30px;
  z-index: 100;
`;

export default Homepage;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Friend from "./Friend";

const User = ({ currentUser, setCurrentUser }) => {
  const [profileUser, setProfileUser] = useState({});
  let { id } = useParams();
  useEffect(() => {
    // fetch("/api" + window.location.pathname)
    fetch("/api/users/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProfileUser(data.data);
      });
  }, []);
  console.log("hello");
  return (
    <>
      {profileUser && profileUser.friends ? (
        <Container>
          <Div>
            <Img src={profileUser.avatarUrl} />
            <H1>{profileUser.name}</H1>
            <H2>{profileUser.name}'s Friends</H2>
            {profileUser.friends.map((friendId) => (
              <Friend friendId={friendId} />
            ))}
          </Div>
        </Container>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
const Container = styled.div`
  background: url("/images/backgroundFaceSpace.jpg");
  background-position: center;
  background-size: cover;
  height: 400px;
`;

const Div = styled.div`
  text-align: center;
`;

const Img = styled.img`
  margin-top: 150px;
  width: 300px;
  border-radius: 50%;
  border: 5px solid #d9c39e;
`;

const H1 = styled.h1`
  margin-top: 10px;
  color: #353148;
  font-family: "Teko", sans-serif;
  font-size: 50px;
  text-align: center;
  border-bottom: 1px solid #353148;
`;

const H2 = styled.h2`
  color: #353148;
  font-family: "Teko", sans-serif;
  font-size: 20px;
  margin-top: 60px;
`;
export default User;

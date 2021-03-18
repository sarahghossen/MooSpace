import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Friend from "./Friend";

const User = () => {
  const [profileUser, setProfileUser] = useState({});

  let { id } = useParams();
  useEffect(() => {
    fetch("/api/users/" + id)
      .then((res) => res.json())
      .then((data) => {
        setProfileUser(data.data);
      });
  }, [id]);
  // console.log(profileUser);
  return (
    <>
      {profileUser && profileUser.friends ? (
        <Container>
          <Div>
            <Img src={profileUser.avatarUrl} />
            <H1>{profileUser.name}</H1>
            <H2>{profileUser.name}'s Friends</H2>
            {profileUser.friends.map((friendId) => (
              <Friend profileUser={profileUser} friendId={friendId} />
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
  background: url("/images/grassBkg.jpg");
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
  height: 300px;
  border-radius: 50%;
  border: 5px solid #b7a260;
`;

const H1 = styled.h1`
  margin-top: 10px;
  color: #464f37;
  font-family: "Teko", sans-serif;
  font-size: 50px;
  text-align: center;
  border-bottom: 1px solid #464f37;
`;

const H2 = styled.h2`
  color: #464f37;
  font-family: "Teko", sans-serif;
  font-size: 20px;
  margin-top: 60px;
`;
export default User;

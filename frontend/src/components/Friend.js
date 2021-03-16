import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";

const Friend = ({ friendId }) => {
  const [friend, setFriend] = useState([]);
  useEffect(() => {
    fetch("/api/users/" + friendId)
      .then((res) => res.json())
      .then((data) => {
        setFriend(data.data);
      });
  }, []);

  return (
    <>
      {friend ? (
        <Link href={`/users/${friendId}`}>
          <Img src={friend.avatarUrl} />
          <H2>{friend.name}</H2>
        </Link>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const Link = styled.a`
  display: inline-block;
  margin: 10px;
  text-decoration: none;
`;

const Img = styled.img`
  text-decoration: none;
  color: #353148;
  width: 150px;
  border-radius: 50%;
  border: 3px solid #d9c39e;
`;

const H2 = styled.h2`
  color: #353148;
  font-family: "Teko", sans-serif;
  font-size: 15px;
  width: 100%;
  text-align: center;
`;

export default Friend;

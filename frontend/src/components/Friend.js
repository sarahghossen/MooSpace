import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Friend = ({ friendId, profileUser }) => {
  const [friend, setFriend] = useState([]);

  useEffect(() => {
    fetch("/api/users/" + friendId)
      .then((res) => res.json())
      .then((data) => {
        setFriend(data.data);
      });
  }, [profileUser]);
  // console.log(friendId);
  return (
    <>
      {friend ? (
        <StyleLink to={`/users/${friendId}`}>
          <Img src={friend.avatarUrl} />
          <H2>{friend.name}</H2>
        </StyleLink>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const StyleLink = styled(Link)`
  display: inline-block;
  margin: 10px;
  text-decoration: none;
`;

const Img = styled.img`
  text-decoration: none;
  color: #353148;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid #d9c39e;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const H2 = styled.h2`
  color: #353148;
  font-family: "Teko", sans-serif;
  font-size: 15px;
  margin: 10px;
  width: 100%;
  text-align: center;
`;

export default Friend;

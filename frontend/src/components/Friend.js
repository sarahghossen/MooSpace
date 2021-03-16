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
          <img src={friend.avatarUrl} />
          <h1>{friend.name}</h1>
        </Link>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const Link = styled.a`
  text-decoration: none;
  color: #353148;
`;
export default Friend;

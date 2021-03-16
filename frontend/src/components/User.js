import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import styled from "styled-components";
import Friend from "./Friend";

const User = () => {
  const [user, setUser] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    // fetch("/api" + window.location.pathname)
    fetch("/api/users/" + id)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
      });
  }, []);
  console.log("hello");
  return (
    <>
      {user && user.friends ? (
        <div>
          <h1>{user.name}</h1>
          <img src={user.avatarUrl} />
          {user.friends.map((friendId) => (
            <Friend friendId={friendId} />
          ))}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};
export default User;

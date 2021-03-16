import React, { useEffect, useState } from "react";
import styled from "styled-components";

const User = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // fetch("/api" + window.location.pathname)
    fetch("/api" + window.location.pathname)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
      });
  }, []);

  if (user && user.friends) {
    return (
      <>
        <div>
          <h1>{user.name}</h1>
          <img src={user.avatarUrl} />
          {user.friends.map((friend) => (
            <div>{friend}</div>
          ))}
        </div>
        <p>users = {user}</p>
      </>
    );
  }
};
export default User;

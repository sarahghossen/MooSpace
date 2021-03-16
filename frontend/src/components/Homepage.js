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
    <Everything>
      <H1>All Facespace members</H1>
      {users.map((user) => (
        <UserDiv>
          <Link href={`/users/${user.id}`}>
            <Img src={user.avatarUrl} alt="Profile pic" />
            <P>{user.name}</P>
          </Link>
        </UserDiv>
      ))}
    </Everything>
  );
};

const UserDiv = styled.div``;

const Everything = styled.div``;

const Link = styled.a`
  text-decoration: none;
`;

const Img = styled.img`
  width: 50px;
  margin: 10px;
`;

const P = styled.p`
  width: 50px;
`;

const H1 = styled.h1`
  color: black;
`;

// const Everyone = styled.div`
//   display: flex;
//   flex-direction: wrap;
//   justify-content: center;
//   margin-top: 50px;
//   margin-left: 20px;
// `;

// const H1 = styled.h1`
//   /* display: flex; */
//   /* flex-direction: row; */
// `;

// const Info = styled.div`
//   display: flex;
//   flex-direction: column;
//   /* align-items: center; */
// `;

// const Img = styled.img`
//   width: 100px;
//   height: 100px;
//   border-radius: 10px;
//   border: 2px solid black;
//   margin-left: 10px;
// `;

// const Name = styled.div`
//   margin-left: 45px;
// `;

export default Homepage;

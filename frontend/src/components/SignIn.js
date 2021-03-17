import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const SignIn = ({ currentUser, setCurrentUser, users, setUsers }) => {
  console.log(currentUser);
  console.log(users);
  const [input, setInput] = useState();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("insideHandle", input);
    users.find((user) => {
      if (user.name.toLowerCase() === input.toLowerCase()) {
        setCurrentUser(user);
      }
    });
    history.push("/");
  };

  return currentUser ? (
    <div>{currentUser.name}</div>
  ) : (
    <>
      {users ? (
        <FormDiv>
          <Form onSubmit={handleSubmit}>
            <P>Your first name here:</P>
            <Input
              type="text"
              onChange={(e) => setInput(e.target.value)}
            ></Input>
            <Button type="submit">Sign in</Button>
          </Form>
        </FormDiv>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(53, 49, 72, 0.8);
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 30vh;
  position: absolute;
  border-radius: 20px;
`;

const FormDiv = styled.div`
  background: url("/images/Montreal.jpg");
  background-position: center;
  background-size: cover;
  height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 7px;
  width: 70%;
  border: none;
  border-radius: 5px;
`;

const Button = styled.button`
  border: none;
  padding: 3px;
  width: 30%;
  margin-top: 10px;
  background-color: #d9c39e;
  color: #353148;
  font-family: "Teko", sans-serif;
  font-size: 15px;
`;

const P = styled.p`
  color: #d9c39e;
  font-family: "Teko", sans-serif;
`;

export default SignIn;

import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const SignIn = ({ currentUser, setCurrentUser, users }) => {
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
    localStorage.setItem("id", currentUser._id);
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
  background-color: rgba(70, 79, 55, 0.8);
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 30vh;
  position: absolute;
  border-radius: 20px;
`;

const FormDiv = styled.div`
  background: url("/images/mooBackground.jpg");
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
  cursor: pointer;
  border: none;
  padding: 3px;
  width: 30%;
  margin-top: 10px;
  background-color: #b7a260;
  color: #464f37;
  font-family: "Teko", sans-serif;
  font-size: 20px;
  border-radius: 7px;
  &:hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

const P = styled.p`
  color: #b7a260;
  font-family: "Teko", sans-serif;
  font-size: 20px;
`;

export default SignIn;

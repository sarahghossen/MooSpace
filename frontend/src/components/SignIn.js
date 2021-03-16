import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <FormDiv>
      <Form>
        <P>Your first name here:</P>
        <Input type="text"></Input>
        <Button type="submit">Sign in</Button>
      </Form>
    </FormDiv>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(221, 175, 148, 0.6);
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 30vh;
  position: absolute;
  border-radius: 20px;
`;

const FormDiv = styled.div`
  background: url("/images/facespace_bg.jpg");
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
  background-color: #353148;
  color: #d9c39e;
  font-family: "Teko", sans-serif;
  font-size: 15px;
`;

const P = styled.p`
  color: #353148;
  font-family: "Teko", sans-serif;
`;

export default SignIn;

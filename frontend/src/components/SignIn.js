import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <FormDiv>
      <Form>
        <input type="text"></input>
        <Button type="submit">Sign in</Button>
      </Form>
    </FormDiv>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #353148;
  align-items: center;
  justify-content: center;
  width: 20vw;
  height: 30vh;
  position: absolute;
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

const Button = styled.button`
  border: none;
  padding: 3px;
  width: 30%;
  margin-top: 10px;
  font-family: "Teko", sans-serif;
`;

export default SignIn;

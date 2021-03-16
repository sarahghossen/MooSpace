import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Header from "./Header";
import SignIn from "./SignIn";
import User from "./User";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Header />
        <Switch>
          {/* <Home> */}
          <Route exact path="/">
            <Homepage />
          </Route>
          {/* </Home> */}
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/users/:id">
            <User />
          </Route>
          <Route path="/profile">Page 1</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

// const Home = styled.div`
//   background-color: #d9c39e;
// `;

export default App;

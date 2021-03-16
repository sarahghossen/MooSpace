import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Header from "./Header";
import SignIn from "./SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Header />
        {/* <SignIn /> */}
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/Profile">Page 1</Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;

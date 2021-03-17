import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Homepage from "./Homepage";
import Header from "./Header";
import SignIn from "./SignIn";
import User from "./User";

const App = () => {
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let getId = localStorage.getItem("id");
    console.log(getId);
    if (getId) {
      fetch(`/api/users/${getId}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCurrentUser(data.data);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <GlobalStyles />
      <div>
        <Header currentUser={currentUser} setCurrentUser={setCurrentUser} />
        <Switch>
          <Route exact path="/">
            <Homepage
              users={users}
              setUsers={setUsers}
              currentUser={currentUser}
            />
          </Route>
          <Route exact path="/sign-in">
            <SignIn
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              users={users}
              setUsers={setUsers}
            />
          </Route>
          <Route exact path="/users/:id">
            <User currentUser={currentUser} setCurrentUser={setCurrentUser} />
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

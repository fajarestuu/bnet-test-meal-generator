import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home";
import ViewRecipe from "../pages/ViewRecipe";

const MainWrapper = styled.div`
  //   padding-inline: 5%;
`;
export default function AppRouter() {
  return (
    <Router>
      <MainWrapper>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/view-recipe/:id">
            <ViewRecipe />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </MainWrapper>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

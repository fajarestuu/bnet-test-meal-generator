import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Category from "../pages/Category";
import Home from "../pages/Home";
import ViewRecipe from "../pages/ViewRecipe";

const MainWrapper = styled.div`
  //   padding-inline: 5%;
`;
export default function AppRouter() {
  return (
    <Router>
      <MainWrapper>
        <Switch>
          <Route path="/category">
            <Category />
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

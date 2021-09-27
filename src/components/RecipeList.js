import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Col = styled.div`
  float: left;
  width: 25%;
  margin-right: 2rem;
  margin-top: 1rem;
  @media screen and (max-width: 600px) {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

const Card = styled.div`
  cursor: pointer;
  //   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  text-align: center;
  background-color: #f1f1f1;
  width: 100%;
  text-align: center;
  padding-bottom: 1rem;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  }
`;
export default function RecipeList({ recipeList }) {
  let history = useHistory();
  return (
    <Row id="recipes">
      {recipeList !== null &&
        recipeList.map((items, index) => {
          return (
            <Col>
              <Card
                onClick={() => history.push("/view-recipe/" + items.idMeal)}
              >
                <img src={items.strMealThumb} width={"100%"}></img>
                <h4
                  style={{
                    marginTop: 15,
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  {items.strMeal}
                </h4>
              </Card>
            </Col>
          );
        })}
    </Row>
  );
}

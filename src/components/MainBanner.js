import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import { API_PATH } from "../constant";
import { Link } from "react-router-dom";

const StyledWrapper = styled.div`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "40rem")};
  background-image: url("${(props) =>
      props.img
        ? props.img
        : "https://via.placeholder.com/1000x1000.png?text=Loading..."}"),
    linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  background-size: cover;
  background-position: center;
  background-blend-mode: overlay;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const StyledH1 = styled.h1`
  font-family: "Merriweather", serif;
  font-style: italic;
`;

export default function MainBanner({ recommendation, recipe, ...props }) {
  const [recipeData, setRecipeData] = useState(recipe || []);
  useEffect(() => {
    console.log(recipe, "rec");
    if (!recipe) {
      axios.get(API_PATH + "random.php").then((res) => {
        setRecipeData(res.data.meals[0]);
      });
    } else {
      setRecipeData(recipe);
    }
  }, [recipe]);
  return (
    <StyledWrapper img={recipeData.strMealThumb} height={props.height}>
      <div style={{ padding: "2rem", textAlign: "center", color: "white" }}>
        {recommendation && (
          <p style={{ margin: ".25rem" }}>Today's recommendation</p>
        )}
        <StyledH1>{recipeData.strMeal}</StyledH1>
        {recommendation && (
          <Link to={`/view-recipe/${recipeData.idMeal}`}>
            <Button state={"outline"}>View Recipe</Button>
          </Link>
        )}
      </div>
    </StyledWrapper>
  );
}

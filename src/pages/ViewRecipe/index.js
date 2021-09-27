import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Badge from "../../components/Badge";
import MainBanner from "../../components/MainBanner";
import { API_PATH, COLOR } from "../../constant";

const StyledWrapper = styled.div`
  margin-top: 0.5rem;
  padding-inline: 5%;
`;

const StyledOl = styled.ol`
  list-style: decimal;
`;

const StyledLi = styled.li`
  margin-bottom: 0.5rem;
`;

const RecipeH2 = styled.h2`
  margin-top: 1rem;
  color: ${COLOR.primary};
`;

const Col = styled.div`
  position: relative;
  width: 100%;
  @media (min-width: 576px) {
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
  }
`;

const Col8 = styled(Col)`
  @media (min-width: 576px) {
    flex: 0 0 66.666667%;
    max-width: 66.666667%;
  }
`;
const Col4 = styled(Col)`
  @media (min-width: 576px) {
    flex: 0 0 33.3%;
    max-width: 33.3%;
  }
`;
export default function ViewRecipe() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    axios.get(API_PATH + "lookup.php?i=" + id).then((res) => {
      setRecipe(res.data.meals[0]);
    });
  }, []);
  return (
    <>
      <MainBanner height={"20rem"} recipe={recipe}></MainBanner>

      <StyledWrapper>
        <Badge>{recipe.strCategory}</Badge>
        <Badge>{recipe.strArea}</Badge>
      </StyledWrapper>
      <StyledWrapper>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Col4>
            <RecipeH2>Ingredients</RecipeH2>
            <table style={{ marginTop: "0.5rem" }}>
              <tr>
                <th style={{ textAlign: "left", paddingRight: "50px" }}>
                  Ingredient
                </th>
                <th style={{ textAlign: "left", paddingRight: "50px" }}>
                  Measure
                </th>
              </tr>

              {[...Array(20)].map((item, index) => {
                if (recipe["strIngredient" + index] != "" || null) {
                  return (
                    <>
                      <tr>
                        <td style={{ paddingBlock: "5px" }}>
                          {recipe["strIngredient" + index]}
                        </td>
                        <td style={{ paddingBlock: "5px" }}>
                          {recipe["strMeasure" + index]}
                        </td>
                      </tr>
                    </>
                  );
                }
              })}
            </table>
          </Col4>
          <Col8>
            <RecipeH2>How to Cook</RecipeH2>
            <StyledOl>
              {recipe.strInstructions &&
                recipe.strInstructions.split("\r\n").map((item, index) => {
                  if (item !== null) {
                    return <StyledLi>{item}</StyledLi>;
                  }
                })}
            </StyledOl>
          </Col8>
        </div>
      </StyledWrapper>
    </>
  );
}

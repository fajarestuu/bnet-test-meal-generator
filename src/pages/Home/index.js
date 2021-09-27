import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Badge from "../../components/Badge";
import MainBanner from "../../components/MainBanner";
import RecipeList from "../../components/RecipeList";
import { API_PATH, COLOR } from "../../constant";

import Banner from "../../assets/img/banner.png";

const RecipeH2 = styled.h2`
  margin-top: 1rem;
  color: ${COLOR.primary};
`;

const StyledWrapper = styled.div`
  margin-top: 0.5rem;
  padding-inline: 5%;
  text-align: center;
`;

export default function Home() {
  const [cat, setCat] = useState([]);
  const [selected, setSelected] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    axios.get(API_PATH + "categories.php").then((res) => {
      setCat(res.data.categories);
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(API_PATH + "filter.php?c=" + selected)
      .then((res) => {
        console.log(res.data.meals);
        setRecipeList(res.data.meals);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
      });
  }, [selected]);
  return (
    <>
      <MainBanner recommendation></MainBanner>

      <StyledWrapper>
        <RecipeH2>Recipe Categories</RecipeH2>
        {cat.map((items, index) => {
          return (
            <Badge
              onClick={() => setSelected(items.strCategory)}
              key={index}
              state={items.strCategory === selected ? "active" : ""}
            >
              {items.strCategory}
            </Badge>
          );
        })}
        <div style={{ marginTop: "4rem" }}>
          {(isLoading || selected === null) && (
            <div style={{ marginBottom: "30px" }}>
              <img src={Banner} width={"30%"}></img>
              <p>Find your favorite food recipe</p>
            </div>
          )}

          <RecipeList recipeList={recipeList} />
        </div>
      </StyledWrapper>
    </>
  );
}

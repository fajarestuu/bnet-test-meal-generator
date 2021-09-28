import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Badge from "../../components/Badge";
import MainBanner from "../../components/MainBanner";
import RecipeList from "../../components/RecipeList";
import { API_PATH, COLOR } from "../../constant";

import Banner from "../../assets/img/banner.png";
import { useLocation } from "react-router-dom";

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
  const search = useLocation().search;
  const searchCat = new URLSearchParams(search).get("cat");
  console.log(searchCat);

  const [cat, setCat] = useState([]);
  const [selected, setSelected] = useState({
    strCategory: null,
    strCategoryDescription: null,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  useEffect(() => {
    axios.get(API_PATH + "categories.php").then((res) => {
      setCat(res.data.categories);
      if (searchCat !== null) {
        const filtered = res.data.categories.filter(
          (x, i) => x.strCategory === searchCat
        );
        setSelected(filtered[0]);
      }
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(API_PATH + "filter.php?c=" + selected.strCategory)
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
        <RecipeH2>What are you planning to cook now?</RecipeH2>
        <Cats cat={cat} selected={selected} setSelected={setSelected} />
        <div style={{ marginTop: "1rem" }}>
          {(isLoading || selected.strCategory === null) && (
            <div style={{ marginBottom: "30px" }}>
              <img src={Banner} width={"30%"}></img>
              <p>Find your favorite food recipe</p>
            </div>
          )}
          {!isLoading && (
            <>
              <RecipeList recipeList={recipeList} />
            </>
          )}
        </div>
      </StyledWrapper>
    </>
  );
}

function Cats({ cat, selected, setSelected }) {
  console.log(selected.strCategory, "sel");
  return (
    <>
      {cat.map((items, index) => {
        return (
          <Badge
            onClick={() => {
              setSelected(items);
            }}
            key={index}
            state={items.strCategory === selected.strCategory ? "active" : ""}
          >
            {items.strCategory}
          </Badge>
        );
      })}
    </>
  );
}

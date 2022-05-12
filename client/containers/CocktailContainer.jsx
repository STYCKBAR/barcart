import React, { useEffect, useState } from "react";
import { Redirect, useLocation } from 'react-router-dom';
import CocktailCardDeck from "../components/CocktailCardDeck.jsx";


/**
 * Stateful component that holds list of cocktails. Currently, set to all possible cocktails and in the future
 * should have a flag that makes one of two requests to the server.
 * 1. List of all cocktails
 * 2. List of possible cocktails based on user's bar inventory
 */
export default function CocktailContainer() {
  const [cocktailList, setCocktailList] = useState([]);//cocktailList [{id: 1, recipe_name: margarita, description:xxx, directions:xxxx}, {id: 2, recipe_name: Martini, description:xxx, directions:xxx}]
  const location = useLocation();
  useEffect(() => {

    // const getCocktailData = async () => {
    //   const request = await fetch("/drinks"); //get request to backend and get all receipies from receipt table
    //   const data = await request.json();
    //   console.log('data', data)
    //   setCocktailList([...data]);
    // };
    // getCocktailData().catch(console.error);
    //string
    const fakeRecipeData = [
      { id: 1, recipe_name: "margarita1", description: "good1", directions: "shake1" },
      { id: 2, recipe_name: "margarita2", description: "good2", directions: "shake2" },
      { id: 3, recipe_name: "longisland", description: "good3", directions: "shake3" },
    ]
    setCocktailList(fakeRecipeData)
  }, []);

  return (
    <div className="cocktail-container">
      <CocktailCardDeck cocktailList={cocktailList} userid={location.state.userid} />
    </div>
  );
}

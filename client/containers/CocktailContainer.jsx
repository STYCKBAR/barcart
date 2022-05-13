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

    const getCocktailData = async () => {
      const request = await fetch("/drinks"); //get request to backend and get all receipies from receipt table
      const data = await request.json()
        .then(data => {
          console.log('data thened', data)
          setCocktailList([...data]);
        })
      //console.log('data', data)

    };
    getCocktailData().catch(console.error);

  }, []);

  return (
    <div className="cocktail-container">
      <CocktailCardDeck cocktailList={cocktailList} userid={localStorage.getItem("userid")} />
    </div>
  );

}

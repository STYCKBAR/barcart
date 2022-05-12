import React from "react";
import CocktailCard from "./CocktailCard.jsx";
import styles from "../scss/cocktaildeck.scss";


/**
 * Renders list of cocktails as cards.
 */
export default function CocktailCardDeck(props) {
  console.log("props in CocktailCardDeck", props);
  return (
    <div className="cocktail-card-deck">
      {!props.cocktailList ? (
        <>loading...</>
      ) : (
        props.cocktailList.map((ele, i) => {
          return <CocktailCard key={i} cocktail={ele} userid={props.userid} />; //ele: {id: 1, recipe_name: margarita, description:xxx, directions:xxxx}
        })
      )}
    </div>
  );
}

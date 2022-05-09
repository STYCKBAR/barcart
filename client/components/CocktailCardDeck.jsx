import React from 'react';
import CocktailCard from './CocktailCard.jsx';
import styles from '../scss/cocktaildeck.scss';

export default function CocktailCardDeck(props) {
  
  console.log(props.cocktailList)
  return (
    <div className='cocktail-card-deck'>
      {/* <CocktailCard /> */}
      {props.cocktailList.map((ele, i)=>{
        return <CocktailCard key={i} cocktail={ele} />
      })}
    </div>
  )
}   
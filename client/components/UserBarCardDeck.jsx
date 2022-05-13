import React from "react";
import UserBarCard from "./UserBarCard.jsx";
import styles from "../scss/userbardeck.scss";


/**
 * Renders list of user inventory. Will filter all inventory with 0 in stock.
 */
export default function UserBarCardDeck(props) {
  //props.userBar: [{ id: '1', ingredient_name: 'lime' }, { id: '2', ingredient_name: 'salt' }, { id: '3', ingredient_name: 'tequila' }]
  console.log("UserBarCardDeck props", props);
  // let stock = [];
  // if (props.userBar) {
  //   stock = props.userBar.filter((ele) => {
  //     return parseInt(ele.in_stock) !== 0;
  //   });
  // }
  // return (
  //   <div className="user-bar-card-deck">
  //     {!stock ? (
  //       <>loading...</>
  //     ) : (
  //       props.userBar.map((ele, i) => {
  //         return <UserBarCard key={i} name={ele.ingredient_name} id={ele.id} />;
  //       })
  //     )}
  //   </div>
  // )

  return (
    <div className="user-bar-card-deck">
      {
        props.userBar.map((ele, i) => {
          return <UserBarCard key={i} name={ele.ingredient_name} id={ele.id} />;
        })
      }
    </div>
  )
};






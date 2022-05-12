import React from "react";
import UserBarCard from "./UserBarCard.jsx";
import styles from "../scss/userbardeck.scss";


/**
 * Renders list of user inventory. Will filter all inventory with 0 in stock.
 */
export default function UserBarCardDeck(props) {

  let stock = [];
  // if (props.userBar) {
  //   stock = props.userBar.filter((ele) => {
  //     return parseInt(ele.in_stock) !== 0;
  //   });
  // }
  return (
    <div className="user-bar-card-deck">
      {!stock ? (
        <>loading...</>
      ) : (
        stock.map((ele, i) => {
          return <UserBarCard key={i} name={ele.family} />;
        })
      )}
    </div>
  );
}

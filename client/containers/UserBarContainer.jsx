import React, { useEffect, useState } from "react";
import UserBarCardDeck from "../components/UserBarCardDeck.jsx";


/**
 * Stores user inventory of ingredients. Has list of items (such as limes, etc) in addition to exact oz amount of remaining
 * bottles. Should eventually dynamically update when the user makes a drink based on the recipe amounts used.
 *
 * For now, inventory is just a column on total ingredient table (aka will be marked 0 if user does not have ingreident,
 * otherwise will show amount).
 *
 * IMPORTANT: All bottles are stored at a rounded oz amount to 25oz to make ml/oz conversion simpler
 */
// export default function UserBarContainer() {
//   // Create state
//   const [userBar, setUserBar] = useState();
//   // useEffect
//   useEffect(() => {
//     const getUserBarData = async () => {
//       const request = await fetch("/universe/ingredients");
//       const ingredients = await request.json();
//       console.log(ingredients);
//       setUserBar([...ingredients.ingredients]);
//     };
//     getUserBarData().catch(console.error);
//   }, []);

//   return (
//     <div className="ingredient-container">
//       <UserBarCardDeck userBar={userBar} />
//     </div>
//   );
// }

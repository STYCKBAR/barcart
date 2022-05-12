import React, { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function IngredientList(props) {
  // props.cocktail looks like {id: 1, recipe_name: margarita, description:xxx, directions:xxxx}
  //state:
  const [allIngArr, setAllIngArr] = useState();
  const [avaIngArr, setAvaIngArr] = useState();
  const [isFetched, setIsFetched] = useState(false);

  //post request (request body is receipe (e.g. margarita), response is in)
  useEffect(() => {
    // const getIngredientData = async () => {
    //   const request = await fetch("/xxxxx/xxx", {//5 call
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ recipe_id: props.cocktail.id, user_id: props.userid }),
    //   }
    //   ); //get request to backend and get all receipies from receipt table
    //   const data = await request.json();
    //   console.log('data', data);
    //   setAllIngArr(data.allIng);
    //   setAvaIngArr(data.avaIng);

    // };
    // getIngredientData().catch(console.error);
    setAllIngArr(['lime', 'salt', 'tequila']);
    setAvaIngArr(['lime', 'salt']);
    setIsFetched(true);
  }, []);

  // return (
  //   <table>
  //     <tr>
  //       {columns.map(ele => <th>{ele}</th>)}
  //     </tr>
  //   </table>
  // );
  // let arr = allIngArr.forEach((el, i) => {
  //   return allIngArr[i]
  // })

  //render here:
  //if data is not fetched from backend, we only render the table header
  if (!isFetched) {
    return (
      <table>
        <tr>
          <th>Ingredient</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </table>
    )

  }
  //if data is fetched from backend, we render whole card
  //create a list of objects - ingList : [{lime: checked}, {salt: checked}, {tequila: add to cart}]
  //input: allIngArr['lime', 'salt', 'tequila'], avaIngArr['lime', 'salt']
  const ingList = [];
  for (let ele of allIngArr) {
    const obj = {};
    if (avaIngArr.includes(ele)) {
      obj[ele] = 'Checked';
    }
    else {
      obj[ele] = 'Add to Cart'
    }
    ingList.push(obj);
  }
  console.log(ingList);
  return (
    <table>
      <tr>
        <th>Ingredient</th>
        <th>Status</th>
      </tr>
      {ingList.map((ele) => <tr><td>{Object.keys(ele)[0]}</td><td>{Object.values(ele)[0]}</td></tr>)}

    </table>

  )

}


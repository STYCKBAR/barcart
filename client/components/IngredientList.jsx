import * as React from 'react';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import Checkbox from '@mui/material/Checkbox';
// import Avatar from '@mui/material/Avatar';

// export default function IngredientList() {
//   const [checked, setChecked] = React.useState([1]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };

//   return (
//     <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {[0, 1, 2, 3].map((value) => {
//         const labelId = `checkbox-list-secondary-label-${value}`;
//         return (
//           <ListItem
//             key={value}
//             secondaryAction={
//               <Checkbox
//                 edge="end"
//                 onChange={handleToggle(value)}
//                 checked={checked.indexOf(value) !== -1}
//                 inputProps={{ 'aria-labelledby': labelId }}
//               />
//             }
//             disablePadding
//           >
//             <ListItemButton>
//               <ListItemAvatar>
//                 <Avatar
//                   alt={`Avatar n°${value + 1}`}
//                   src={`/static/images/avatar/${value + 1}.jpg`}
//                 />
//               </ListItemAvatar>
//               <ListItemText id={labelId} primary={`Line item ${value + 1}`} />
//             </ListItemButton>
//           </ListItem>
//         );
//       })}
//     </List>
//   );
// }
export default function IngredientList() {
  //state:

  //post request (request body is receipe (e.g. margarita), response is in)

  return (
    <table>
      <tr>
        <th>Ingredient</th>
        <th>Status</th>
        <th></th>
      </tr>
      {/* ingredient from db */}
      <tr>
        <td>Alfreds Futterkiste</td>
        <td>Maria Anders</td>
        <td>Germany</td>
      </tr>
      {/* status from state */}
      <tr>
        <td>Centro comercial Moctezuma</td>
        <td>Francisco Chang</td>
        <td>Mexico</td>
      </tr>
    </table>

  )

}


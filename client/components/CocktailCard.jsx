import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import margarita from '/assets/imgs/margarita.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocalBarIcon from '@mui/icons-material/LocalBar';
import IngredientList from './IngredientList.jsx';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CocktailCard(props) {
  //we get props.cocktail and props.key from CocktailCardDeck
  // props.cocktail looks like {id: 1, recipe_name: margarita, description:xxx, directions:xxxx}
  const [expanded, setExpanded] = React.useState(false);
  //get request to backend get description, recipe_name from recipes table

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 500, m: 2 }} >
      <CardHeader
        // avatar={
        // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
        //   R
        // </Avatar>
        // }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }

        title={props.cocktail.recipe_name}
      />
      <CardContent id="cardContainer">

        <CardMedia
          component="img"
          height="194"
          image={margarita}
          alt="A margarita"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {/* get the drink description from db */}
            {props.cocktail.description}

          </Typography>
        </CardContent>

      </CardContent>


      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="shoppingList">
          <AddShoppingCartIcon />
        </IconButton>
        <IconButton aria-label="drink">
          <LocalBarIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <IngredientList cocktail={props.cocktail} />
          </Typography>


          <Typography paragraph>Directions:</Typography>
          <Typography paragraph>
            {props.cocktail.directions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card >
  );
}
































// import React from "react";
// import styles from "../scss/cocktailcard.scss";


// /**
//  * Displays cocktail information. Should eventually be set up to store recipe info too.
//  */
// export default function CocktailCard(props) {
//   return (
//     <div className="cocktail-card">
//       <div className="design-block">
//         <p className="card-text card-name">{props.cocktail.drink}</p>
//       </div>
//       <p className="card-text card-flavor">
//         <b>Flavor:</b> {props.cocktail.flavor}
//       </p>
//       <p className="card-text card-glass">
//         <b>Glassware:</b> {props.cocktail.glassware}
//       </p>
//     </div>
//   );
// }

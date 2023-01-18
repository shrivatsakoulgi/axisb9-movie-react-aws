import axios from "axios";
import classes from "./MovieItem.module.css"
import { useState } from "react";
function MovieItem(props) {

  var [isFavorite,setIsFavorite] = useState(false)

  function toggleFavoriteHandler(){
    const baseURL="http://localhost:8200/favorite-movie"
    if(isFavorite===false){
    const favoriteMovieData={
      userName:"Shrivatsa",
      favoriteMovieId:props.movieId
  };


  fetch (baseURL,{
   method:"POST",
   headers:{
       "Content-Type":"application/json"
   },
   body:JSON.stringify(favoriteMovieData)
  })
  .then((response)=>{
   alert("Movie added to Favorites...")
  })
  .catch((error)=>{
   alert("Error")
  })
 setIsFavorite(true)
}
else{
  axios.delete(baseURL+`/${props.key}`)
  .then((response)=>{
  alert("Movie Removed from Favorites...")}
  );
  setIsFavorite(false)
}

  }
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <h4>{props.imdb}</h4>
      </div>
      <div className={classes.actions}>
        <button onClick={toggleFavoriteHandler}>
          {isFavorite? 'Remove from Favorites':'Add to Favorites'}
        </button>
      </div>
    </li>
  );
}

export default MovieItem;

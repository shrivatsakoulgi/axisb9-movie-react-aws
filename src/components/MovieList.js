import MovieItem from "./MovieItem";
import classes from "./MovieList.module.css";
function MovieList(props) {
  return (
    <ul className={classes.list}>
      {props.movies.map((movie) => 
         
        <MovieItem
          key={movie.movieId}
          movieId={movie.movieId}
          title={movie.title}
          imdb={movie.imdb}
          image={movie.imageUrl}
          description={movie.description}
          favorite={false}
        />
      )}
    </ul>
  );
}

export default MovieList;

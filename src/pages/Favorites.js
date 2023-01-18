
import axios from "axios";
import { Component } from "react";
import MovieItem from "../components/MovieItem";

/*
function Favorites() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);
  const [movieDetails,setMovieDetails] = useState([]);

  useEffect(() => {
    var baseURL = "http://localhost:8200/favorite-movies";
    var movieUrl = `http://localhost:8200/movie`;

    axios.get(baseURL).then((response) => {
      //  console.log(response.data)
      setFavoriteMovies(response.data);
    });
    var movieArray=[]
    favoriteMovies.map((movie)=>{
        axios.get(movieUrl+`/${movie.favoriteMovieId}`).then((response)=>{
            console.log(response.data)
            movieArray.push(response.data)
        })
    })
    setMovieDetails(movieArray)
  //  console.log(movieDetails)
  },[] )
  return(
    <div>
        </div>
  )
}
*/


class Favorites extends Component {

  state = {
    favoriteMovies: [],
    movieItems:[]
  };

  baseURL = "https://ec2-54-157-169-238.compute-1.amazonaws.com:8300/favorite-movies";

  async componentDidMount() {
    const response = await fetch(this.baseURL);
    const body = await response.json();
    this.setState({ favoriteMovies: body });

  }
   async render() {

    const { favoriteMovies } = this.state;
    var movieItems=[]
    var movieUrl = `https://ec2-54-157-169-238.compute-1.amazonaws.com:8300/movie`;

 
    for (let i = 0; i < favoriteMovies.length; i++) {
   //   console.log(favoriteMovies.length);
      var movieId = favoriteMovies[i].favoriteMovieId;
     let response= await axios.get(movieUrl + `/${movieId}`).then()
     console.log(response.data)

    }
    
    
  // console.log(movieItems)
   

    return (  
        <div>
          
           <h2> Hello </h2>        
        </div>
    )
  

    
  }
}



export default Favorites;

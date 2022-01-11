import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {addToFavorite} from './store/actions'
const map1 = new Map(); 

export default function Movie() {
  const params = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  //console.log(params);
  
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=9a0228784e7a8223de25fbaf7f0f9b51"
      )
      .then((res) => {
        var movie = res.data.results;
        for (var i = 0; i < movie.length; i++) {
          if (params.id == movie[i].id) {
            setMovieDetails(movie[i]);
          }
        }
      })
      .catch((err) => console.log(err));
  }, []);
  //console.log(map1)
  const increaseFavorites = () => {
    if(!map1.get(movieDetails.id)){
      map1.set(movieDetails.id,-1);
    }
  console.log(map1);
    if(map1.get(movieDetails.id)<0){
    dispatch({type:"ADD_TO_FAVORIATE",favorites:favorites+1});
    map1.set(movieDetails.id, 1);
  console.log(map1);
  }
  };
  const decreaseFavorites = () => {
    if(map1.get(movieDetails.id)==1){
      map1.set(movieDetails.id, 0);
    dispatch({type:"Decrement",favorites:favorites-1});}
  };
  //console.log(movieDetails);
  return (
    <div>
      <h1>Movie page</h1>
      <button onClick={increaseFavorites}>Like</button>
      /\{<button onClick={decreaseFavorites}>Dislike</button>}
      <h1>{movieDetails.title}</h1>

      <center>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
        />
      </center>
      <p>Language: {movieDetails.original_language}</p>
      <h5>{movieDetails.overview}</h5>
      <p>Popularity: {movieDetails.popularity}</p>
      <p>Release Date: {movieDetails.release_date}</p>
      <p>Vote Average: {movieDetails.vote_average}</p>
      <p>Vote Count: {movieDetails.vote_count}</p>
      <div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}

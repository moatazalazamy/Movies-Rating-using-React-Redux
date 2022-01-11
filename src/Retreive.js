import React, { useEffect, useState,useContext } from "react";
import Card from "react-bootstrap/Card";
import {Link} from "react-router-dom";
import axios from "axios";
import { LanguageContext } from "./context/languageContext";
const Retreive = () => {
  const { contextLang, setContextLang } = useContext(LanguageContext);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=9a0228784e7a8223de25fbaf7f0f9b51&language=${contextLang}`
      )
      .then((res) => setMovies(res.data.results))
      .catch((err) => console.log(err));
  }, [movies]);
  console.log(contextLang)
  return (
    <>
      {movies.map((movie) => {
        return (
          <div class="container">
  <div class="row">
          <Card className="col"  >
          <center><img width='600px' height='600px'src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} /></center>
          <Link to={`/movie/${movie.id}`} key={movie.id}> <h3 >{movie.title}</h3></Link>
         
          <h5>{movie.overview}</h5>
         
          </Card></div></div>);
      })}
    </>
  );
};

export default Retreive;

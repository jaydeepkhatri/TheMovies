import React from "react";
const API_images = "https://image.tmdb.org/t/p/w1280/";
import './Movie.css';
import {AiFillStar} from "react-icons/ai";

const truncate = (overview, words) => {
  return overview.split(" ").splice(0,words).join(" ");
}

const Movie = ({title, vote_average, overview,poster_path}) => {
    return (
      <div className="movie">
        <div className="cover">
          <img src={API_images + poster_path} alt={title} />
        </div>
        <div className="info">
          <p className="title">{title}</p>
          <p className="overview">{truncate(overview, 20)}... </p>
          <span className="rating"><AiFillStar /> {vote_average}</span>
        </div>
      </div>
    );
  }
  
  export default Movie;
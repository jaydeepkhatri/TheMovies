import React from "react";
const API_images = "https://image.tmdb.org/t/p/w1280/";
import './Movie.css';
import {AiFillStar} from "react-icons/ai";
import {Link} from "react-router-dom";

const truncate = (overview, words) => {
  return overview.split(" ").splice(0,words).join(" ");
}

const Movie = ({id, title, vote_average, overview,poster_path}) => {
    return (
      <Link className="movie" to={`movie/${id}`}>
        <div className="cover">
          <img src={API_images + poster_path} alt={title} />
        </div>
        <div className="info">
          <p className="title">{title}</p>
          <p className="overview">{truncate(overview, 20)}... </p>
          <span className="rating"><AiFillStar /> {vote_average.toFixed(1)}</span>
        </div>
      </Link>
    );
  }
  
  export default Movie;
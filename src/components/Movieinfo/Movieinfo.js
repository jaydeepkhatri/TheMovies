import "./Movieinfo.css";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {BiLoaderAlt, BiLinkExternal} from "react-icons/bi";
import {AiFillStar} from "react-icons/ai";

const Movieinfo = () => {
    let params = useParams();
    const movieid = params.id;
    const api_key = "7cfc85516ca2247cf6e74cb94dc31857";
    const Movie_API = `https://api.themoviedb.org/3/movie/${movieid}`;
    

    const [movieInfo, setMovieInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(Movie_API, {
            params: {
            api_key
            }
        })
            .then(res => {
            setMovieInfo(res.data);
            setLoading(false);
            });
    },[]);


    return(
        loading ?
        <div classame="loader">
            <BiLoaderAlt />
        </div>
        :
        <>
            <img className="movieimg" alt={movieInfo.original_title} src={`https://image.tmdb.org/t/p/w1280${movieInfo.backdrop_path}`} />
            <div className="movieinfo">
                <div className="info">
                    <h2 className="title">{movieInfo.original_title}</h2>
                    <p className="tagline">{movieInfo.tagline}</p>
                    <p className="mt14">{movieInfo.overview}</p>
                    <div className="genres">
                        {
                            movieInfo.genres.map((genre) => {
                                <span className="genre" key={genre.id}>{genre.name}</span>
                            })
                        }
                    </div>
                    <p className="vote"><AiFillStar /> &nbsp;{movieInfo.vote_average} / 10</p>
                    <p className="mt14">Release Date: {movieInfo.release_date}</p>
                    <a href={movieInfo.homepage} className="visibtn" target="_blank">Visit their website <BiLinkExternal /></a>
                </div>
            </div>
        </>
    )
}

export default Movieinfo;
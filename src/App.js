import { Movie, Navbar } from "./components";
import axios from "axios";
import { useState, useEffect } from "react";



const API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7cfc85516ca2247cf6e74cb94dc31857";

const search_API = "https://api.themoviedb.org/3/search/movie?api_key=7cfc85516ca2247cf6e74cb94dc31857&query=";

function App() {
  const [movies, setMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    axios.get(API)
      .then(res => {
        setMovies(res.data.results);
      });
  }, []);
  
  const searchMovie = (search) => {
      axios.get(search_API + search)
        .then(res => {
          setMovies(res.data.results);
        });
  }

  return (
    <>
      <Navbar  handleSearch={searchMovie} />
      <div className="moviesgrid">

        {
          movies.map((movie) => (
            <Movie key={movie.id} {...movie} />
          ))
        }
      </div>
    </>
  );
}

export default App;

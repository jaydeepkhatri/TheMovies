import { Movie, Navbar, Movieinfo } from "./components";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs"
import { BiLoaderAlt } from "react-icons/bi";



const API = "https://api.themoviedb.org/3/discover/movie";
const api_key = "7cfc85516ca2247cf6e74cb94dc31857";
const search_API = "https://api.themoviedb.org/3/search/movie";




function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(API, {
      params: {
        api_key,
        sort_by: "popularity.desc",
        page
      }
    })
      .then(res => {
        setMovies(res.data.results);
        setTotalPages(res.data.total_pages);
        setLoading(false);
      });
  }, [page]);

  const searchMovie = (search) => {
    axios.get(search_API, {
      params: {
        api_key,
        query: search,
        page
      }
    })
      .then(res => {
        setMovies(res.data.results);
        setLoading(false);
      });
  }

  const downpage = () => {
    if (!(page <= 1)) {
      setPage(page - 1);
      setLoading(true);
    }
  }

  const uppage = () => {
    if (!(page >= totalPages)) {
      setPage(page + 1);
      setLoading(true);
    }
  }

  function Home() {
    return (
      loading ?
        <div className="loader">
            <BiLoaderAlt />
        </div>
        :
      <>
        <div className="moviesgrid" >
          {
            movies.map((movie) => (
              <Movie key={movie.id} {...movie} />
            ))
          }
        </div>
        <div className="pagination">
          <button onClick={downpage}>
            <BsChevronLeft />
          </button>
          Page {page} of {totalPages}
          <button onClick={uppage}>
            <BsChevronRight />
          </button>
        </div>
      </>
    )
  }
function Test() {
  return (
    <h1>This is a movie Component</h1>
  )
}
function Lost() {
  return (
    <h1>It seems, you are lost</h1>
  )
}


  return (

    <>
      <Navbar handleSearch={searchMovie} />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="movie" element={<Test />} />
        <Route path="movie/:id" element={<Movieinfo />} />
        <Route path="*" element={<Lost />} />
      </Routes>
    </>
  );
}

export default App;

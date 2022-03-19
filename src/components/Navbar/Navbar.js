import "./Navbar.css";
import {BiSearchAlt2} from "react-icons/bi";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Search = ({handleSearch}) => {
    const [search, setSearch] = useState("");
    const [dark, setDark] = useState(true);

    const  handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(search);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleTheme = () => {
        dark ? setDark(false) : setDark(true);
        
    }

    useEffect(() => {
        document.querySelector("body").classList.toggle("light-theme");
    }, [dark]);

    return (
        <nav className="navbar">
            <h2 className="title"><Link to="/">TheMovies</Link></h2>
            <div className="searchcontrol">
                <label className="switch">
                    <input type="checkbox" onClick={handleTheme}/>
                    <span className="slider round"></span>
                </label>
                <form onSubmit={handleSubmit} >
                    <input type="search" id="search" className="searchinput" value={search} onChange={handleChange}  autoComplete="off" placeholder="Search" />
                    <BiSearchAlt2 />
                </form>
            </div>
        </nav>
    )
}

export default Search;
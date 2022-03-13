import "./Navbar.css";
import {BiSearchAlt2} from "react-icons/bi";
import { useState } from "react";

const Search = ({handleSearch}) => {
    const [search, setSearch] = useState("");

    const  handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(search);
    }

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    return (
        <nav className="navbar">
            <h2 className="title">TheMovies</h2>
            <div className="searchcontrol">
                <form onSubmit={handleSubmit} >
                    <input type="search" id="search" className="searchinput" value={search} onChange={handleChange}  autoComplete="off" placeholder="Search" />
                    <BiSearchAlt2 />
                </form>
            </div>
        </nav>
    )
}

export default Search;
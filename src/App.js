import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from '../src/Search.svg';
import MovieCard from "./MovieCard";


//56e8a81d

const API_URL = 'http://www.omdbapi.com?apikey=56e8a81d';

const Moviedata = {
    
        "Title": "Interception",
        "Year": "2009",
        "imdbID": "tt0977658",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTI3NDE0MzgxNl5BMl5BanBnXkFtZTcwMzM2NDUyMg@@._V1_SX300.jpg"
    
}

const App =() => {
    const [movies, setmovies] = useState([]);
    const [search, setsearch] = useState('');

    
    // used to fetch the data from the url 
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`); //used to get response in http 
        const data = await response.json(); //used to data from the api

        setmovies(data.Search);
    
    }
 
    useEffect(() => {
        searchMovies('Marvel');
    },[]);

    return (
        <div className="app">
            <h1>See Through Screen</h1>
            <div className="search">
                <input 
                        placeholder="Search"
                        value={search}
                        onChange={(e) =>setsearch(e.target.value)}></input>
                        <img 
                        src={SearchIcon}
                        alt="search"
                        onClick={() => searchMovies(search)} />
            </div>

            {
                movies?.length > 0
                ?(
                <div className="container">
                    {movies.map((movie)=>(
                    <MovieCard Moviedata={movie} />
                ))}
                </div>
                ):(
                    <div className="empty">
                    <h2>No movies found</h2>
                </div>
                )
            }

          
        </div>
        );
}

export default App;
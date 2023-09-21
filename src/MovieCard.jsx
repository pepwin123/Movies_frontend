import React from "react";


const MovieCard= ({ Moviedata }) => {   //object destruction
    return(
        <div className="movie">
        <div>
         <p>{Moviedata.Year}</p>
        </div>
        <div>
         <img src={Moviedata.Poster !== 'N/A' ? Moviedata.Poster : 'https://via.placeholder.com/'}  alt={Moviedata.Titleitle}/>
        </div>
        <div>
            <span>{Moviedata.Type}</span>
            <h3>{Moviedata.Title}</h3>
        </div>
    </div>
    
    );
}


export default MovieCard;


import React from "react";

const MovieList = (props) => {
    const NominationComponent = props.nominationComponent;
    return (
        <>
            {props.movies.map((movie, index) => (
                <div className="col-md-3 pb-5">
                <img src={movie.Poster} alt="banner"></img>
                <h3>{movie.Title}</h3>
                <h4>Year: {movie.Year}</h4>
                <button onClick={() => props.handleFavouritesClick(movie)}><NominationComponent /></button>
                </div>
            ))}
        </>
    )
}

export default MovieList;
import React from "react";
import {Link} from "react-router-dom";

const MoviesList = ({movies}) =>{
    const renderMovies = Object.keys(movies).map(movieID =>
        <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
)
// console.log(movies["1"].title)
// console.log(Object.keys(movies))
// console.log(Object.keys(movies).map(movieID => movies[movieID].title))
return(
    <div>
        {renderMovies}
    </div>
)
}

export default MoviesList


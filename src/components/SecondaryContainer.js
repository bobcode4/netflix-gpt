import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector(store => store.movies);
    return (
       
        <div className="bg-black">
            <div className="-mt-64 relative z-20 pl-12">
            <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
            <MovieList title={"Popular"} movies={movies?.popularMovies}/>
            <MovieList title={"Mystery"} movies={movies?.nowPlayingMovies}/>
            <MovieList title={"Horror"} movies={movies?.nowPlayingMovies}/>
            <MovieList title={"Drama"} movies={movies?.nowPlayingMovies}/>
            </div>
        </div>
        
    )
    
}

export default SecondaryContainer;
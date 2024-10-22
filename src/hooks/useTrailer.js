import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";

const useTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS)
        const json = await data.json();
        const filterTrailers = json?.results.filter((video)=> video?.type === "Trailer")
        const officialTrailer = (filterTrailers? filterTrailers[0] : json.results[0]);
        dispatch(addTrailerVideo(officialTrailer));
    };

    useEffect(() => {
        getMovieVideos();
    }, [])
}

export default useTrailer;
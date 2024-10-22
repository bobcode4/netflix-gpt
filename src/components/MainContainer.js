import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";


const MainContainer = () => {
    const movies = useSelector(store=> store.movies?.nowPlayingMovies);
    if(!movies) return ;
    const mainMovie = movies[6];
    const {title, overview, id} = mainMovie;
    return (
        <div className="">
            <VideoTitle title={title} description={overview}/>
            <VideoBackground movieId={id}/>
        </div>
    )
}

export default MainContainer;
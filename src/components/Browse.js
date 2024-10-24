import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearchPage from "./GptSearchPage";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    const showGptSearch = useSelector(store => store?.gpt?.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();

    return (
        <div className="">
            <Header />
            {showGptSearch? (<GptSearchPage/>) : 
            <>
                <MainContainer />
                <SecondaryContainer />
            </>
            }
            
            
        </div>
    );
};

export default Browse;
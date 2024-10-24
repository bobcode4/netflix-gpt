import { BG_IMG } from "../utils/constants";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    return (
        <div>
            <div className="absolute -z-20">
                <img src={BG_IMG}
                alt="bg-img"
                />
            </div>
            <GptSearchBar />
        </div>
    );
};

export default GptSearchPage;
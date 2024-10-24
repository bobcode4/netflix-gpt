import { useSelector } from 'react-redux';
import {lang} from '../utils/languageConstants'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)
    return (
        <div className=" pt-[10%] flex justify-center">
            <form className="bg-transparent w-1/2 grid-cols-12 grid">
                <input
                type="text"
                placeholder={lang[langKey].gptSearchPlaceHolder}
                className="p-4 m-4 col-span-9 border-solid border-red-800 border-2 rounded-xl font-bold"
                >
                </input>
                <button
                // onClick={}
                className="py-2 px-10 bg-gradient-to-r from-green-700 to-red-600 m-4 text-white rounded-lg col-span-3 text-clip"
                >
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    );
};

export default GptSearchBar;
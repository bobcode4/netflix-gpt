import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { SIGNOUTLOGO, SUPPORTED_LANGUAGES } from '../utils/constants';

import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector((store) => store.user);
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
        navigate('/error')
        });
    }

    const handleGptSearchClick = () => {
        //toggle Show GPT functionality
        dispatch(toggleGptSearchView())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              const {uid, email, displayName} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName}));
              navigate('/browse');
            } else {
              dispatch(removeUser());
              navigate('/');
            }
          });

          //unSubscribe when the component unmounts
          return () => unSubscribe();
    }, []);

    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
            <img src={SIGNOUTLOGO}
            alt="netflix-logo"
            className="w-44"
            />

            {(user)&&
            <div className="flex p-2">
                {showGptSearch && (<select className='p-2 m-2 bg-gray-900 text-white' onChange={handleLanguageChange}>
                    {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                </select>)}
                <button 
                className='py-3 px-3 mx-4 my-1  rounded-lg bg-green-900 text-white'
                onClick={handleGptSearchClick}
                >
                    {showGptSearch ? "HomePage" : "GPTSearch"}
                </button>
                <img
                    alt="user-icon"
                    src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
                    className="w-12 h-12 my-auto"
                />
                <p 
                className="font-bold text-white self-center cursor-pointer"
                onClick={handleSignOut}
                >
                    SignOut
                </p>
        </div>}

            
        </div>
    );
};

export default Header;




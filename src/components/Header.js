import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
        navigate('/');
        }).catch((error) => {
        navigate('/error')
        });
    }
    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
            <img src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo"
            className="w-44"
            />

            {(user)&&
            <div className="flex p-2">
            <img
            alt="user-icon"
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            className="w-12 h-12 my-auto"/>
            <p 
            className="font-bold text-white self-center"
            onClick={handleSignOut}
            >
                SignOut
            </p>
        </div>}

            
        </div>
    );
};

export default Header;
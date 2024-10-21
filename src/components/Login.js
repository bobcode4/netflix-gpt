import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile} from "firebase/auth"
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);

    const handleButtonClick = () => {      
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if(message) return;
        if(!isSignInForm){
            //signup Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
            // Signed up     
            const user = userCredential.user;
            updateProfile(user, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
                }).then(() => {
                    const {uid, email, displayName} = auth.currentUser;
                    dispatch(addUser({uid:uid, email:email, displayName:displayName}));
                }).catch((error) => {
                    setErrorMessage(error.message)
                });
                
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + "-" + errorMessage);
        })
        } else {
            //signin Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                })
        }

    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
  return (
    <div>
        <Header />
        <div className="absolute">
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/7c0e18aa-2c95-474d-802e-7f30e75dcca4/web/US-en-20241014-TRIFECTA-perspective_9740753d-8799-4571-b1c4-45d40f5f5a72_large.jpg"
        alt="bg-img"
        className=""
        />
        </div>
        <form className="absolute w-3/12 p-12 my-24 mx-auto right-0 left-0 text-white bg-black bg-opacity-80"
        onSubmit={(e)=> e.preventDefault()}
        >
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (
            <input
            ref={name}
            type="text" 
            placeholder="Full Name" 
            className="p-4 my-4 w-full bg-gray-700 rounded-lg" 
            />)}

            <input 
            ref={email}
            type="text" 
            placeholder="Email or Phone number" 
            className="p-4 my-4 w-full bg-gray-700 rounded-lg" 
            />

            <input 
            ref={password}
            type="password" 
            placeholder="Password" 
            className="p-4 my-4 w-full bg-gray-700 rounded-lg" 
            />

            <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
            <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
            onClick={handleButtonClick}
            >
                {isSignInForm? "Sign In" : "Sign Up"}
            </button>
            <p onClick={toggleSignInForm} className="cursor-pointer">
                {isSignInForm? "New to Netflix? SignUp Now" : "Already registered! Sign In now"}
            </p>
        </form>
    </div>
  );  
};

export default Login;
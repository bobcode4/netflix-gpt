import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

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
        <form className="absolute w-3/12 p-12 my-24 mx-auto right-0 left-0 text-white bg-black bg-opacity-80">
        <h1 className="font-bold text-3xl py-4">{isSignInForm? "Sign In" : "Sign Up"}</h1>
            {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />)}
            <input type="text" placeholder="Email or Phone number" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
            <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
            <button
            className="p-4 my-6 bg-red-700 w-full rounded-lg"
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
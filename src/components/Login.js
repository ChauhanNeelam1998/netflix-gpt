import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggelSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg_logo"
        />
      </div>
      <form className="absolute bg-black p-12 w-3/12 mx-auto my-36 right-0 left-0 text-white rounded-lg opacity-90">
        <h1 className="py-3 font-bold text-3xl">
          {isSignIn ? "Sign In" : "Sign Out"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 my-2 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-2 w-full bg-gray-700 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-2 w-full bg-gray-700 rounded-md"
        />
        <button className="p-2 my-4 w-full bg-red-700 rounded-md">
          {isSignIn ? "Sign In" : "Sign Out"}
        </button>
        <p className="py-4 cursor-pointer underline" onClick={toggelSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Alredy Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;

import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validation";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  // const navigate = useNavigate();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonChange = () => {
    //Validation code
    // console.log(email.current.value);
    // console.log(password.current.value);
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(message);
    setErrorMessage(message);

    if (message) return;

    if (!isSignIn) {
      //Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          //Update a user's profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              // ...
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              //navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              // ...
              setErrorMessage(error.message);
            });

          // console.log(user);
          //navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
          // ..
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          //navigate("/browse");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "- " + errorMessage);
        });
    }
  };

  const toggelSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="bg_logo"
          className="h-screen object-cover md:w-screen "
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-12 w-8/12 md:w-3/12 mx-auto  my-[14%] md:my-[5%] right-0 left-0 text-white rounded-lg opacity-90"
      >
        <h1 className="py-3 font-bold text-xl md:text-3xl">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 md:p-3 my-2 w-full bg-gray-700 rounded-md"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 md:p-3 my-2 w-full bg-gray-700 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 md:p-3 my-2 w-full bg-gray-700 rounded-md"
        />
        <p className="text-red-700 font-semibold text-lg">{errorMessage}</p>
        <button
          className="p-2 md:p-2 my-4 w-full bg-red-700 rounded-md"
          onClick={handleButtonChange}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 cursor-pointer underline text-sm md:text-md"
          onClick={toggelSignInForm}
        >
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Alredy Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;

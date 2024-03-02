import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggelGptSearch } from "../utils/gptSlice";
import { SUPPOTED_LANGUAGE } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        //navigate("/");
      })
      .catch((error) => {
        // An error happened
        navigate("/error");
      });
  };

  // We want this code always present on app - onAuthStateChanged - checking for authentication state of user either SignIn , SignOut and LogOut

  useEffect(() => {
    //return unsubscibe function - we are subscribe to onAuthStateChaned() - Every time our header load this useEffect is called (mounting). When header unmount we want to unsubscibe this function (cleaning Process)
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsubscribe the Function
    return () => unsubscribe();
  }, []);

  /**************************************************************************/

  const handleGptSearch = () => {
    //Toggle GPT Search
    dispatch(toggelGptSearch());
  };

  const handelLaguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  /************************************************************************** */

  return (
    <div className="absolute px-8 py-1 bg-gradient-to-b from from-black z-10 w-screen flex flex-col sm:flex-row md:flex-row justify-between">
      <img className="w-36 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-0 md:p-2 justify-center">
          {showGptSearch && (
            <select
              className="p-2 bg-black text-white mx-3 my-5"
              onChange={handelLaguageChange}
            >
              {SUPPOTED_LANGUAGE.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            className="bg-purple-800 text-white px-5 my-6 rounded-md"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            alt="usericon"
            src={user.photoURL}
            className="w-8 h-8 my-7 mx-2"
          />
          <button
            className="text-white text-sm font-bold md:text-lg"
            onClick={handleSignOut}
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;

import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  console.log(auth);
  const gooleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    // console.log("google mama is coming");
    signInWithPopup(auth, gooleProvider)
      .then((result) => {
        // console.log(result);
        const loggedInUser = result.user;
        setUser(loggedInUser);
        // console.log(loggedInUser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handlSignOut = () => {
    // console.log("sign out");
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        // console.log(result);
        const loggedInUser = result.user;
        console.log(loggedInUser);
        setUser(loggedInUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      {/*  user? logout : sign in*/}

      {user ? (
        <button onClick={handlSignOut}>Sign out</button>
      ) : (
        <>
          <button onClick={handleGoogleSignIn}>Google login</button>
          <button onClick={handleGithubSignIn}>Github Login</button>
        </>
      )}
      {/*  <button onClick={handleGoogleSignIn}>Google login</button>
      <button onClick={handlSignOut}>Sign out</button>
      */}
      {user && (
        <div>
          <h3>{user?.displayName}</h3>
          <p>{user?.email}</p>
          <img src={user?.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;

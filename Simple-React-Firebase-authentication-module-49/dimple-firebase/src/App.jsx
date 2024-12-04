import "./App.css";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "./firebase/firebase.config";
import { useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
function App() {
  const [user, setUser] = useState(null);

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result);
        const loggedUser = result.user;
        console.log(loggedUser);
        setUser(loggedUser);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>firebase + React</h1>
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
      {user && (
        <div className="card">
          <h4>User: {user.displayName}</h4>
        </div>
      )}
    </>
  );
}

export default App;

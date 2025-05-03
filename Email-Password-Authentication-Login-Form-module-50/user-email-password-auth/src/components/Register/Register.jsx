import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [seuccess, setSuccess] = useState("");
  const [showPassword, setPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    // console.log("form submitting");
    // console.log(e);
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    // reset error
    setRegisterError("");
    setSuccess("");

    // console.log(typeof password);
    if (password.length < 6) {
      setRegisterError("Password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case characters."
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please accept our terms and conditons!");
      return;
    }
    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSuccess("User Created Successfully.");

        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => console.log("profile updated"))
          .catch();
        // send verification email:
        sendEmailVerification(result.user).then(() => {
          alert("please check your email and verify your account");
        });
      })
      .catch((error) => {
        console.log(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="mx-auto md:w-1/2">
        <h3 className="text-3xl mb-8">Please Register</h3>
        <form onSubmit={handleRegister}>
          <input
            className="border mb-4 w-full py-2 px-4"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <br />
          <input
            className="border mb-4 w-full py-2 px-4"
            type="email"
            name="email"
            placeholder="Email Address"
            required
          />
          <br />
          <div className="relative mb-4">
            <input
              className="border w-full py-2 px-4 pr-10"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              required
            />
            <span
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <br />
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept out <a href="">Terms and Conditons</a>
            </label>
          </div>
          <br />
          <input
            className="btn btn-secondary mb-4 w-full"
            type="submit"
            value="Register"
          />
        </form>

        {registerError && <p className="text-red-700">{registerError}</p>}

        {seuccess && <p className="text-green-600">{seuccess}</p>}
        <p>
          Already have an account? Please <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;

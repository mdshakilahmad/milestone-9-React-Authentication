import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import qZone1 from "../../../assets/swimming.png";
import qZone2 from "../../../assets/class.png";
import qZone3 from "../../../assets/playground.png";
const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-7">
        <h2 className="text-xl font-poppins font-semibold">Login With</h2>
        <button className="btn btn-outline w-full">
          <FaGoogle></FaGoogle> Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub></FaGithub>Login with Google
        </button>
      </div>
      <div className="p-4 mb-7">
        <h2 className="text-xl font-poppins font-semibold mb-4">Find Us On</h2>
        <a
          className="p-4 flex items-center text-lg border rounded-t-lg"
          href="#"
        >
          <FaFacebook className="mr-3"></FaFacebook> Facebook
        </a>
        <a className="p-4 flex items-center text-lg border-x" href="#">
          <FaTwitter className="mr-3"></FaTwitter> Twitter
        </a>
        <a
          className="p-4 flex items-center text-lg border rounded-b-lg"
          href="#"
        >
          <FaInstagram className="mr-3"></FaInstagram> Instagram
        </a>
      </div>
      {/* q zone */}
      <div className="p-4 mb-7 bg-customGray">
        <h2 className="text-xl font-poppins font-semibold mb-4">Q-Zone</h2>
        <img className="mb-5" src={qZone1} alt="qZone-img" />
        <img className="mb-5" src={qZone2} alt="qZone-img" />
        <img src={qZone3} alt="qZone-img" />
      </div>
    </div>
  );
};

export default RightSideNav;

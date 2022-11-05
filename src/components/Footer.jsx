import zuriLogo from "../Assets/Zuri.Internship_Logo.png";
import I4G from "../Assets/i4g.png";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Outlet />
      <footer>
        <div className="zuri__logo">
          <img src={zuriLogo} alt="zurilogo" />
        </div>
        <p className="task">HNG Internship 9 Frontend Task</p>
        <div className="I4G__logo">
          <img src={I4G} alt="I4G logo" />
        </div>
      </footer>
    </>
  );
};

export default Footer;

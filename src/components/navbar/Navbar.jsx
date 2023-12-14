import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const user = false;
  return (
    <div className="navbar">
      <div className="topLeft">
        <i className="topIcons fa-brands fa-linkedin"></i>
        <i className="topIcons fa-brands fa-facebook"></i>
        <i className="topIcons fa-brands fa-github"></i>
        <i className="topIcons fa-brands fa-x-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/contact" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
          {/* <li className="topListItem">
            <Link to="/logout" className="link">
              LOGOUT
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link to="/login" className="link">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link to="/register" className="link">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
};
export default Navbar;

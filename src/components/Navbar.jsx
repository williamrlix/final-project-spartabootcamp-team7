import "bootstrap/dist/css/bootstrap.css";
import "../App.css";
import React, { useEffect, useState, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../redux/actions/auth";
import { clearMessage } from "../redux/actions/message";
import { useDispatch, useSelector } from "react-redux";
import { Provider } from "react-redux";

function Navbar() {
  const { user: currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const location = useLocation();

  useEffect(() => {
    if (["/signin", "/signup"].includes(location.pathname)) {
      dispatch(clearMessage());
    }
  }, [dispatch, location]);

  const handleLogout = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  const [navbarStyle, setNavbarStyle] = useState({
    backgroundColor: 'transparent',
    transition: 'background-color 0.5s ease'
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarStyle({
          backgroundColor: '#333',
          transition: 'background-color 0.5s ease'
        });
      } else {
        setNavbarStyle({
          backgroundColor: 'transparent',
          transition: 'background-color 0.5s ease'
        });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  return (
    <>
        <nav style={navbarStyle} className="sticky">
          <div className="fixed-element"></div>
          <div className="logo">LOGO</div>
          <div className="menu">
            <ul>
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <Link to={"Subpage"}>
                <li>Destination Page</li>
              </Link>

              {currentUser ? (
                <>
                  <Link to={"/signin"} onClick={handleLogout}>
                    <li>Log Out</li>
                  </Link>
                  <Link to={"/"}>
                    <li>{`${currentUser.name}`}</li>
                  </Link>
                  <Link to={"/profile"}>
                    <li>Profile</li>
                  </Link>
                </>
              ) : (
                <>
                  <Link to={"/signin"}>
                    <li>Sign In</li>
                  </Link>
                  <Link to={"/signup"}>
                    <li>Sign Up</li>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </nav>
    </>
  );
}

export default Navbar;
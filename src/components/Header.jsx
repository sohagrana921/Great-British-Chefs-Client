import { Avatar, Button, Dropdown, Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut();
  };
  return (
    <div className="my-container">
      <Navbar fluid={true} rounded={true}>
        <Link to="/">
          <img
            src="https://media-cdn2.greatbritishchefs.com/media/kxtop14a/gbc_logo1.svg"
            className="mr-3 h-6 sm:h-9 font-bold"
            alt=""
          />
        </Link>
        <div className="flex md:order-2">
          {user ? (
            <div className="flex">
              <Link onClick={handleLogOut} to="/login">
                <Button gradientMonochrome="cyan" className="mr-5">
                  Logout
                </Button>
              </Link>
              <Tooltip content={user.displayName}>
                <Avatar
                  alt="User settings"
                  img={user.photoURL}
                  rounded={true}
                />
              </Tooltip>
            </div>
          ) : (
            <Link to="/login">
              <Button gradientMonochrome="cyan" className="mr-5">
                Login
              </Button>
            </Link>
          )}

          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "font-bold"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "font-bold"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "font-bold"
            }
          >
            About
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

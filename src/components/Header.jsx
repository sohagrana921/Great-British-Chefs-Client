import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
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
          <Link to="/login">
            <Button gradientMonochrome="cyan" className="mr-5">
              Login
            </Button>
          </Link>
          <Link to="/register">
            <Button gradientMonochrome="cyan" className="mr-5">
              Register
            </Button>
          </Link>
          <Avatar
            alt="User settings"
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />

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
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold " : "font-bold"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-blue-600 font-bold" : "font-bold"
            }
          >
            Blog
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

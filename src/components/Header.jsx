import { Avatar, Button, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="my-container">
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src="https://cdn-icons-png.flaticon.com/128/1980/1980654.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <Link to="/">
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
              Cooking Canvas
            </span>
          </Link>
        </Navbar.Brand>
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
          <Link to="/">
            <Navbar.Link active={true}>Home</Navbar.Link>
          </Link>
          <Navbar.Link>About</Navbar.Link>
          <Link to="/blog">
            <Navbar.Link>Blog</Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

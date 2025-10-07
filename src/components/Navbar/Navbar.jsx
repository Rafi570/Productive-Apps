import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const navItemStyle = ({ isActive }) =>
    `px-4 py-2 rounded-md text-sm font-medium transition duration-300 ${
      isActive
        ? "bg-clip-text text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"
        : "text-gray-700 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2]"
    }`;

  const links = (
    <>
      <NavLink className={navItemStyle} to="/">
        Home
      </NavLink>
      <NavLink className={navItemStyle} to="/apps">
        Apps
      </NavLink>
      <NavLink className={navItemStyle} to="/installation">
        Installation
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <div className="flex items-center">
            <img className="h-[40px] w-[40px]" src={logo} alt="Logo" />
            <h2 className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-inter text-[16px] font-bold leading-[26px] capitalize">
              HERO.IO
            </h2>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://github.com/Rafi570"
          target="_blank"
          rel="noopener noreferrer"
          className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white flex items-center gap-2"
        >
          <FaGithub />
          Contribute
        </a>
      </div>
    </div>
  );
};

export default Navbar;

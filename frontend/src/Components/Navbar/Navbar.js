import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Profile from "../../Images/Icons/User.svg";
import Logo from "../../Images/Icons/logo.svg";
import { NavLink, useLocation, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="Navbar navbar-expand-lg">
        <div className="Navbar-info container">
          <div className="d-none mob-nav"></div>
          <div className="">
            <Link to="/" className="d-flex align-items-center logo">
              <h2 className="logo-txt">Farzand Yoli</h2>
              <img src={Logo} alt="img" />
            </Link>
          </div>
          <div className="nav-con">
            <ul className="ml-auto show">
              <li>
                <NavLink to="/" className="nav-link">
                  Главная
                </NavLink>
              </li>
              <li>
                <NavLink to="/forum" className="nav-link">
                  Форум
                </NavLink>
              </li>
            </ul>
          </div>
          <div>
            <div className="profile-content d-flex">
              <h3 className="profile-content-txt">
                Rozikov Akmal Baxodirovich
              </h3>
              <Link to="/account">
                <button className="profile-btn">
                  <img src={Profile} alt="" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default Navbar;

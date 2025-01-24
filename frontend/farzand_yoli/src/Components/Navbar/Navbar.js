import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import Profile from "../../Images/Icons/User.svg";
import Logo from "../../Images/Icons/logo.svg";

function Navbar() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <div className="Navbar">
      <div className="Navbar-info container">
        <div className="d-none mob-nav" onClick={handleShow}>
          {show ? (
            <li>
              <button
                onClick={() => setShow(true)}
                className="mini-navbar-button"
              >
                <IoMdClose />
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={() => setShow(false)}
                className="mini-navbar-button"
              >
                <AiOutlineMenu />
              </button>
            </li>
          )}
        </div>
        <div className="">
          <Link
            to="/"
            onClick={() => setShow(false)}
            className="d-flex align-items-center logo"
          >
            <h2 className="logo-txt">Farzand Yoli</h2>
            <img src={Logo} alt="img" />
          </Link>
        </div>
        <div className="nav-con">
          <ul className="ml-auto show">
            <li>
              <Link to="/" className="nav-link">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                Поиски
              </Link>
            </li>
            <li>
              <Link to="/products" className="nav-link">
                Услуги
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="profile-content d-flex">
            <h3 className="profile-content-txt">Rozikov Akmal Baxodirovich</h3>
            <button className="profile-btn">
              <img src={Profile} alt="" />
            </button>
          </div>
        </div>
      </div>
      {show ? (
        <div className="minibar">
          <ul className="ml-auto mini-nav-links">
            <li onClick={() => setShow(false)}>
              <Link to="/" className="nav-link ">
                Главная
              </Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link to="/products" className="nav-link">
                Поиски
              </Link>
            </li>
            <li onClick={() => setShow(false)}>
              <Link to="/products" className="nav-link">
                Услуги
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default Navbar;

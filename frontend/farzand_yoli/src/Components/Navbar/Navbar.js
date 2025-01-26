import React, { useState } from "react";
import Modal from "react-modal";
import { Link, NavLink } from "react-router-dom";
import Profile from "../../Images/Icons/User.svg";
import Logo from "../../Images/Icons/logo.svg";
import "./Navbar.scss";

Modal.setAppElement("#root");

function Navbar({ isAuthenticated, setIsAuthenticated }) {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({ email: "", password: "", confirmPassword: "" });

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
    setIsRegisterModalOpen(false);
  };

  const closeLoginModal = () => setIsLoginModalOpen(false);

  const openRegisterModal = () => {
    setIsRegisterModalOpen(true);
    setIsLoginModalOpen(false);
  };

  const closeRegisterModal = () => setIsRegisterModalOpen(false);

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Успешная авторизация
    setIsAuthenticated(true);
    closeLoginModal();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Успешная регистрация
    setIsAuthenticated(true);
    closeRegisterModal();
  };

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
            {window.location.pathname === '/home' ? (
              <ul className="ml-auto show">
                <li>
                  <NavLink to="/home" className="nav-link">
                    Главная
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/forum" className="nav-link">
                    Форум
                  </NavLink>
                </li>
              </ul>
            ) : (
              <div className="auth-buttons">
                <button onClick={openLoginModal} className="btn btn-primary">
                  Логин
                </button>
                <button onClick={openRegisterModal} className="btn btn-secondary">
                  Регистрация
                </button>
              </div>
            )}
          </div>
          {isAuthenticated && (
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
          )}
        </div>
      </div>

      <Modal
        isOpen={isLoginModalOpen}
        onRequestClose={closeLoginModal}
        contentLabel="Login Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Логин</h2>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="login-email">Email:</label>
            <input type="email" id="login-email" name="email" value={loginData.email} onChange={handleLoginChange} required />
          </div>
          <div>
            <label htmlFor="login-password">Пароль:</label>
            <input type="password" id="login-password" name="password" value={loginData.password} onChange={handleLoginChange} required />
          </div>
          <Link to='home'><button type="submit">Войти</button></Link>
        </form>
        <button onClick={closeLoginModal}>Закрыть</button>
      </Modal>

      <Modal
        isOpen={isRegisterModalOpen}
        onRequestClose={closeRegisterModal}
        contentLabel="Register Modal"
        className="Modal"
        overlayClassName="Overlay"
      >
        <h2>Регистрация</h2>
        <form onSubmit={handleRegisterSubmit}>
          <div>
            <label htmlFor="register-email">Email:</label>
            <input type="email" id="register-email" name="email" value={registerData.email} onChange={handleRegisterChange} required />
          </div>
          <div>
            <label htmlFor="register-password">Пароль:</label>
            <input type="password" id="register-password" name="password" value={registerData.password} onChange={handleRegisterChange} required />
          </div>
          <div>
            <label htmlFor="register-confirm-password">Подтвердите пароль:</label>
            <input type="password" id="register-confirm-password" name="confirmPassword" value={registerData.confirmPassword} onChange={handleRegisterChange} required />
          </div>
          <Link to='home'><button type="submit">Зарегистрироваться</button></Link>
        </form>
        <button onClick={closeRegisterModal}>Закрыть</button>
      </Modal>
    </>
  );
}

export default Navbar;

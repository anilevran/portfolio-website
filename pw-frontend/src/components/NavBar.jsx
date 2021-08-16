import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/auth";
import { Link } from "react-router-dom";

import "../css/Navbar.css";

function NavBar() {
  let param = window.location.pathname;
  var [activeTab, setActiveTab] = useState(param);
  var isAuthed = useSelector((state) => {
    return state.value;
  });
  var dispatch = useDispatch();
  return (
    <nav className="nav-container">
      <div className="nav-list">
        <Link
          to="/"
          className={activeTab === "/" ? "nav-link-active" : "nav-link"}
          onClick={() => setActiveTab("/")}
        >
          Ana Sayfa
        </Link>
        <Link
          to="/products"
          className={activeTab === "/products" ? "nav-link-active" : "nav-link"}
          onClick={() => setActiveTab("/products")}
        >
          Ürünlerimiz
        </Link>
        <Link
          to="/aboutus"
          className={activeTab === "/aboutus" ? "nav-link-active" : "nav-link"}
          onClick={() => setActiveTab("/aboutus")}
        >
          Hakkımızda
        </Link>
        <Link
          to="/contact"
          className={activeTab === "/contact" ? "nav-link-active" : "nav-link"}
          onClick={() => setActiveTab("/contact")}
        >
          İletişim
        </Link>
      </div>
      {isAuthed === null || isAuthed === false ? (
        <div className="nav-auth">
          <Link
            to="/signin"
            className={activeTab === "/signin" ? "nav-link-active" : "nav-link"}
            onClick={() => setActiveTab("/signin")}
          >
            <b>Giriş Yap</b>
          </Link>
          <Link
            to="/signup"
            className={activeTab === "/signup" ? "nav-link-active" : "nav-link"}
            onClick={() => setActiveTab("/signup")}
          >
            <b>Üye ol</b>
          </Link>
        </div>
      ) : (
        <div className="nav-auth">
          <Link
            to="/adminpanel"
            className={
              activeTab === "/adminpanel" ? "nav-link-active" : "nav-link"
            }
            onClick={() => setActiveTab("/adminpanel")}
          >
            <b>Admin Panel</b>
          </Link>
          <Link
            to="/"
            className="nav-link"
            onClick={() => {
              setActiveTab("/");
              dispatch(logout());
            }}
          >
            <b>Çıkış Yap</b>
          </Link>
        </div>
      )}
    </nav>
  );
}

export default NavBar;

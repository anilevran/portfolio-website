import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../features/auth";
import { Link } from "react-router-dom";

import "../css/Login.css";

function Register() {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  var dispatch = useDispatch();

  var isFieldsValid = () => {};

  var handleSignup = (e) => {
    e.preventDefault();
    if (isFieldsValid) {
      axios
        .post("http://localhost:9000/signup", {
          email: email,
          password: password,
        })
        .then((response) => {
          if (response.status === 200) {
            dispatch(login());
            console.log("Kullanıcı Başarıyla Eklendi.");
            window.location.pathname = "/";
          } else {
            console.log("Kullanıcı Eklenemedi!");
          }
        })
        .catch((err) => {
          console.log(err);
          console.log("Kayıt Olurken Hata Oluştu.");
        });
    }
  };
  var handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  var handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form className="Form-container">
      <div className="Form-line">
        <div className="Form-label">Email:</div>
        <input
          className="Form-input"
          placeholder="example@gmail.com"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>
      <div className="Form-line">
        <div className="Form-label">Şifre</div>
        <input
          className="Form-input"
          type="password"
          placeholder="************"
          value={password}
          onChange={handlePasswordChange}
          required
        />
      </div>
      <div className="Form-line-button">
        <Link
          to="/"
          className="Form-button"
          type="button"
          onClick={handleSignup}
        >
          Kayıt Ol
        </Link>
      </div>
    </form>
  );
}

export default Register;
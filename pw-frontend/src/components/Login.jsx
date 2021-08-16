import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../actions";

import "../css/Auth.css";

function Login() {
  var [email, setEmail] = useState("anil.evran7@gmail.com");
  var [password, setPassword] = useState("10261026");
  const dispatch = useDispatch();

  var handleLogin = (e) => {
    axios
      .post("http://localhost:9000/signin", {
        email: email,
        password: password,
      })
      .then((result) => {
        if (result.data.length === 0) {
          console.log("Bu Kullanıcı Kayıtlı Değil!");
        } else {
          console.log(`${result.data[0].email} başarıyla giriş yaptı`);
          dispatch(login());
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Giriş yaparken hata oluştu");
      });
  };

  var handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  var handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <form className="Form-container">
      {/* <div className="Form-info">Giriş Yap!</div> */}
      <div className="Form-content-container">
        <div className="Form-line">
          <div className="Form-label">Email</div>
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
          />
        </div>
        <div className="Form-line-button">
          <Link
            to="/"
            className="Form-button"
            type="button"
            onClick={handleLogin}
          >
            Giriş Yap
          </Link>
        </div>
      </div>
    </form>
  );
}

export default Login;

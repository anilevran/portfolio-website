import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import "../css/HomeContent.css";

function HomeContent() {
  const auth = useSelector((state) => state.auth);
  return (
    <div className="Homecontent-title-container">
      <div className="Homecontent-title">
        {auth ? "Yetkiniz Var!!" : "Yetkiniz Yok!!"}
      </div>
    </div>
  );
}

export default HomeContent;

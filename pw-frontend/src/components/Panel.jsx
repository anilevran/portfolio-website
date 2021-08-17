import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

import "../css/Panel.css";

function Panel() {
  //Add product to database
  // , {
  //   name: "tshirt",
  //   type: 0,
  //   size: "2x",
  //   price: 20,
  // }

  var postTransactions = async () => {
    if (auth) {
      await axios
        .get("http://localhost:9000/adminpanel")
        .then((result) => {
          setapiResponse(result.data);
        })
        .catch((err) => {
          console.log(err);
          console.log("Ürün verileri alınamadı!!");
        });
    }
  };

  var editRow = (tempId) => {
    let row = document.getElementById(tempId);
    let rowChilds = document.getElementById(tempId).children;

    if (rowChilds[0].getAttribute("contenteditable") === "true") {
      row.style.backgroundColor = "rgba(91, 14, 45, 0)";
      for (let i = 0; i < rowChilds.length; i++) {
        rowChilds[i].setAttribute("contenteditable", "false");
      }
    } else {
      for (let i = 0; i < rowChilds.length; i++) {
        rowChilds[i].setAttribute("contenteditable", "true");
        row.style.backgroundColor = "rgba(91, 14, 45, 1)";
      }
    }
  };

  var datafunc = () => {
    if (isPosted === true) {
      let arr = [];
      for (let i = 0; i < apiResponse.length; i++) {
        //contentEditable="true"
        arr.push(
          <>
            <div className="Data-row" id={apiResponse[i]._id}>
              <div className="Data-column" onChange={() => console.log("asd")}>
                {apiResponse[i].name}
              </div>
              <div className="Data-column">{apiResponse[i].type}</div>
              <div className="Data-column">{apiResponse[i].size}</div>
              <div className="Data-column">{apiResponse[i].price + "TL"}</div>
              <div className="Data-column">
                <span
                  className="Edit-icon"
                  onClick={() => editRow(apiResponse[i]._id)}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </span>
              </div>
            </div>
          </>
        );
      }
      return arr;
    }
  };

  var [apiResponse, setapiResponse] = useState("Empty");
  var [isPosted, setPosted] = useState(false);

  var auth = useSelector((state) => state.auth);
  if (!isPosted) {
    postTransactions();
    setPosted(true);
  }

  useEffect(() => {});

  return (
    <div>
      {auth ? (
        <div className="Container-Panel">
          <div className="Data-Container">
            <div className="Data-header">
              <div className="Data-column">Ürün İsmi</div>
              <div className="Data-column">Ürün Tipi</div>
              <div className="Data-column">Ürün Boyutu</div>
              <div className="Data-column">Ürün Fiyatı</div>
              <div className="Data-column">Düzenle</div>
            </div>
            {datafunc()}
          </div>
        </div>
      ) : (
        <div>YETKI YOK</div>
      )}
    </div>
  );
}

export default Panel;

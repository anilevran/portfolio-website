import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import "../css/AdminPanel.css";

function Panel() {
  var isAuthed = useSelector((state) => {
    return state.value;
  });

  //Add product to database
  // , {
  //   name: "tshirt",
  //   type: 0,
  //   size: "2x",
  //   price: 20,
  // }

  var postTransactions = async () => {
    if (isAuthed === true) {
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

  var datafunc = () => {
    if (isPosted === true) {
      let arr = [];
      for (let i = 0; i < apiResponse.length; i++) {
        //contentEditable="true"
        arr.push(
          <>
            <div className="Data-row" itemID={apiResponse[i]._id}>
              <div className="Data-column">{apiResponse[i].name}</div>
              <div className="Data-column">{apiResponse[i].type}</div>
              <div className="Data-column">{apiResponse[i].size}</div>
              <div className="Data-column">{apiResponse[i].price + "TL"}</div>
              <div className="Data-column"><span className="Edit-icon"><FontAwesomeIcon icon={faEdit} /></span></div>
            </div>
            
          </>

        );
      }
      return arr;
    }
  };

  var [apiResponse, setapiResponse] = useState("Empty");
  var [isPosted, setPosted] = useState(false);
  if (!isPosted) {
    postTransactions();
    setPosted(true);
  }

  return (
    <div>
      {isAuthed === true ? (
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
      ) : (
        <div>YETKI YOK</div>
      )}
    </div>
  );
}

export default Panel;

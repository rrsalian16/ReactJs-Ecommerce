import React from "react";
import "./style.css";

const Item = ({ key, item, buttonName, onClick }) => {
  return (
    <>
      <div className="card">
        <h3>{item.name}</h3>
        <p>{item.type}</p>
        <div className="card-footer">
          <p>{item.price} $</p>
          <button onClick={onClick} className="card-button">
            {" "}
            {buttonName}
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;

import React, { useState, useContext } from "react";
import "./style.css";

import Item from "../components/Item";
import { StateContext } from "../Context/Context";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../Context/Context-type";

const Checklist = ({ data = [], updateData = undefined }) => {
  const [state, dispatch] = useContext(StateContext);

  const onClickButton = item => {
    item.inCart
      ? dispatch({ type: REMOVE_FROM_CART, payload: item.id })
      : dispatch({ type: ADD_TO_CART, payload: item.id });
  };

  return (
    <>
      <ul className="cards">
        {state.items.map((item, index) => (
          <Item
            item={item}
            buttonName={item.inCart ? "Remove" : "Add to Cart"}
            key={index}
            onClick={() => onClickButton(item)}
          />
        ))}
      </ul>
    </>
  );
};

export default Checklist;

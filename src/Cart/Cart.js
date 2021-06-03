import React, { useContext } from "react";
import { useHistory, Link } from "react-router-dom";

import { StateContext } from "../Context/Context";
import { REMOVE_FROM_CART } from "../Context/Context-type";
import Item from "../components/Item";
import "./style.css";

const Cart = ({ data, updateData }) => {
  const [state, dispatch] = useContext(StateContext);

  const history = useHistory();

  const handleClick = () => {
    history.push("/checkout");
  };

  const onClickButton = id => {
    dispatch({ type: REMOVE_FROM_CART, payload: id });
  };

  let price = state.items
    .filter(i => i.inCart)
    .reduce((a, b) => ({ price: a.price + b.price }), { price: 0 }).price;
  return (
    <>
      {price > 0 ? (
        <>
          <ul className="cards">
            {state.items.map((item, index) => {
              if (item.inCart) {
                return (
                  <Item
                    item={item}
                    buttonName={"Delete"}
                    key={index}
                    onClick={() => onClickButton(item.id)}
                  />
                );
              }
            })}
          </ul>
          <div className="bottom-div">
            <h3>Total Price : {price} $</h3>
            <button className="checkout-btn" onClick={handleClick}>
              Check Out
            </button>
          </div>
        </>
      ) : (
        <div className="empty-cart">
          <h3 style={{ margin: "20px" }}>Empty Cart</h3>
          <Link to="/home">Go to Home</Link>
        </div>
      )}
    </>
  );
};

export default Cart;

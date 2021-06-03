import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { StateContext } from "../Context/Context";
import { RESET } from "../Context/Context-type";
import "./style.css";

function CheckOut(props) {
  const [state, dispatch] = useContext(StateContext);
  const history = useHistory();
  const [msg, setMsg] = useState("");
  const [address, setAddress] = useState("");

  const onClickHandler = () => {
    console.log(address);
    if (address.trim()) {
      setMsg("Succesfully ordered");
      dispatch({ type: RESET });
      setTimeout(() => {
        history.push("/home");
      }, 1000);
    } else {
      setMsg("**Please enter the address");
    }
  };

  const onAddressChange = e => {
    setAddress(e.target.value);
  };

  return (
    <div className="form">
      <h3>Enter address</h3>
      <textarea value={address} onChange={onAddressChange} rows="4" cols="50" />
      <p>{msg}</p>
      <button onClick={onClickHandler} className="submit-btn">
        Place Order
      </button>
    </div>
  );
}
export default CheckOut;

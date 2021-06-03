import React, { useReducer, createContext } from "react";
import { RESET, ADD_TO_CART, REMOVE_FROM_CART } from "./Context-type";

const initialState = {
  items: [
    { id: 1, name: "iphone11", type: "mobile", price: 60000, inCart: false },
    { id: 2, name: "iphone12", type: "mobile", price: 80000, inCart: false },
    {
      id: 3,
      name: "iphone12pro",
      type: "mobile",
      price: 100000,
      inCart: false
    },
    { id: 4, name: "Samsung", type: "tv", price: 30000, inCart: false },
    { id: 5, name: "Sony", type: "tv", price: 50000, inCart: false },
    { id: 6, name: "LG", type: "tv", price: 70000, inCart: false }
  ]
};

export const StateContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const index = state.items.findIndex(i => i.id === action.payload);
      const newArray = [...state.items];
      newArray[index].inCart = true;
      return { ...state, items: newArray };
    case REMOVE_FROM_CART:
      const i = state.items.findIndex(i => i.id === action.payload);
      const newArray2 = [...state.items];
      newArray2[i].inCart = false;
      return { ...state, items: newArray2 };
    case RESET:
      return {
        ...state,
        ...state.items.map(item => {
          item.inCart = false;
          return item;
        })
      };
    default:
      return state;
  }
};

export const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {...props.children}
    </StateContext.Provider>
  );
};

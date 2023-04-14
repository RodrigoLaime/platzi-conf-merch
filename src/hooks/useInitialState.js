import { useState } from "react";
import initialState from '../inititalState';
const useIntialState = () => {
  const [state, setState] = useState(initialState);

  //funcion para añadir un item
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload]
    })
  }

  //funcion para remover un item
  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(items => items.id !== payload.id)
    })
  }

  //funcion para agregar el comprador
  const addTobuyer = payload => {
    setState({
      ...state,
      buyer: [...state.buyer, payload]
    })
  };

  //
  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload]
    })
  };

  return {
    addToCart,
    removeFromCart,
    state,
    addTobuyer,
    addNewOrder
  }
};

export default useIntialState;
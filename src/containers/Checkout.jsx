import React, { useContext } from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import { Helmet } from 'react-helmet';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;
  //funciona para eliminar un producto
  const handleRemove = product => () => {
    removeFromCart(product);
  };
  //funciona para sumar el total de precio
  const handleSumTotal = () => {
    let reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    let sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <>
      <Helmet>
        <title>Lista de pedidos</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? <h3>Lista de Pedidos:</h3> : <h3>Sin Pedidos...</h3>}

          {cart.map((item) => (
            <div className="Checkout-item" key={item.price}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                <span>${item.price}</span>
              </div>
              <button type="button" onClick={handleRemove(item)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          ))}

        </div>

        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>`Precio Total: $ ${handleSumTotal()}`</h3>
            <Link to={'/checkout/information'}>
              <button type="button">Continuar pedido</button>
            </Link>
          </div>
        )}

      </div>
    </>
  );
};

export default Checkout;

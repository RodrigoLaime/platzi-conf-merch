import React, { useContext } from 'react'
import AppContext from '../context/AppContext';
import { PayPalButton } from 'react-paypal-button-v2';
import '../styles/components/Payment.css'
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext)
  const { cart, buyer } = state;
  const history = useNavigate();

  const paypalOtions = {
    clientId: 'Ac42uKvsMcMIt3f8pDKXH1AePjQxT5N0oWyLMi2-C2SmvsMr1jLkBTyUIYSzZUfWYFWh10RTdGbrsDuD',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect'
  }

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      history('/checkout/success')
    }
  }

  const handleSumTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen de pedido:</h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {''} {item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOtions}
            buttonStyles={buttonStyles}
            amount={handleSumTotal()}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.log(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Payment;
/* import React, { useContext } from 'react';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useNavigate } from 'react-router-dom';

const Payments = () => {
  const navigate = useNavigate()

  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId: 'Ac42uKvsMcMIt3f8pDKXH1AePjQxT5N0oWyLMi2-C2SmvsMr1jLkBTyUIYSzZUfWYFWh10RTdGbrsDuD',
    intent: 'capture',
    currency: 'USD'
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = (data) => {
    console.log(data);
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      }
      navigate('/checkout/success');
      addNewOrder(newOrder);
    };
  };

  //funciona para sumar el total de precio
  const handleSumTotal = () => {
    let reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    let sum = cart.reduce(reducer, 0);
    return sum;
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${' '}{item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalScriptProvider>
            <PayPalButtons
              paypalOptions={paypalOptions}
              buttonStyles={buttonStyles}
              amount={handleSumTotal()}
              onPaymentStart={() => console.log('Start Paypal')}
              onPaymentSuccess={data => handlePaymentSuccess(data)}
              onPaymentError={error => console.log(error)}
              onPaymentCancel={data => console.log(data)}
            />
          </PayPalScriptProvider>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Payments; */
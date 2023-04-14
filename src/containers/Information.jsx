import React, { useContext, useRef } from 'react';
import '../styles/components/Information.css';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../context/AppContext';

const Information = () => {
  const { state, addTobuyer } = useContext(AppContext);
  const form = useRef(null);

  const navigate = useNavigate();

  const { cart } = state;

  const handleSubmit = () => {
    const forData = new FormData(form.current);
    const buyer = {
      'name': forData.get('name'),
      'email': forData.get('email'),
      'address': forData.get('address'),
      'apto': forData.get('apto'),
      'city': forData.get('city'),
      'country': forData.get('country'),
      'state': forData.get('state'),
      'cp': forData.get('cp'),
      'phone': forData.get('phone'),
    }
    addTobuyer(buyer);
    navigate('/checkout/payment')
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="addres" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to='/checkout'>Regresar</Link>
          </div>
          <div className="Information-next">
            <button type='button' onClick={handleSubmit}>Pagar</button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.title}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Information;
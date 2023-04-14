import React, { useContext } from 'react'
import '../styles/components/Header.css'
import { Link } from 'react-router-dom'
import AppContext from '../context/AppContext'

const Header = () => {
  const { state } = useContext(AppContext);

  const { cart } = state;

  return (
    <div className='Header'>
      <h1 className='Header-title'>PLatziConf Merch</h1>
      <Link to={'/'}>Home</Link>
      <div className='Header-title'>
        <Link to={'/checkout'}>
          <i className="fa-solid fa-bag-shopping"></i>
        </Link>
        {cart.length > 0 && <div className='Header-alert'>{cart.length}</div>}
      </div>
    </div>
  )
}

export default Header
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from '../containers/Home.jsx';
import Checkout from '../containers/Checkout.jsx';
import Information from '../containers/Information.jsx';
import Payment from '../containers/Payment.jsx';
import Success from '../containers/Success.jsx';
import NotFound from '../containers/NotFound.jsx';

import Layout from '../components/Layout.jsx';
import AppContext from '../context/AppContext.js';
import useIntialState from '../hooks/useInitialState.js';

const App = () => {
  const initialState = useIntialState();
  return (
    <AppContext.Provider value={initialState}>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkout/information' element={<Information />} />
            <Route path='/checkout/payment' element={<Payment />} />
            <Route path='/checkout/success' element={<Success />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </AppContext.Provider>
  )
}

export default App
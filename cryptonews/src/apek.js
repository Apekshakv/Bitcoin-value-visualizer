import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Exchanges from './components/Exchanges';
import New from './components/New';
import App from './App';
import Cryptocoins from './components/Cryptocoins';
import CryptoDetails from './components/CryptoDetails';
import Cryptocurencies from './components/Cryptocurencies';
import Homepage from './components/Homepage';

const Raste = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/news' element={<New />} />
      <Route path='/exchanges' element={<Exchanges />} />
      <Route path='/details/:uuid'element={<CryptoDetails />} />
      <Route path='/cryptocuriencs' element={<Cryptocurencies/>}></Route>
      <Route path='/cryptocoins' element={<Cryptocoins/>}></Route>
    </Routes>
  );
};

export default Raste;

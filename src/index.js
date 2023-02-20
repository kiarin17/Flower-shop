import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import './index.css';

import Main from './pages/Main';
import Contact from './pages/Contact';
import Catalog from './pages/Catalog';
import About from './pages/About';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Main />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

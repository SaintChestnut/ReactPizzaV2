import React from 'react';
import { Route, Routes } from 'react-router-dom';


import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound'

import './scss/app.scss';
import './App.css';

function App() {
  
  return (
    <div className="wrapper">
      <Header/>
      <div className="content">
        <Routes>
          <Route path={"*"} element={<NotFound/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

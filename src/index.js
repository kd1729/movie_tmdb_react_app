import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourites from './Components/Favourites';
import WatchLater from './Components/WatchLater';
import Completed from './Components/Completed';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/favourites" element={<Favourites />}/>
      <Route path="/WatchLater" element={<WatchLater />}/>
      <Route path="/Completed" element={<Completed />}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);



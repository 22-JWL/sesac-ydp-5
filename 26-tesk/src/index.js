import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Board from './Board';
import Event_ex from './Member';
import React_ex from './ex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Board />
  </React.StrictMode>
);

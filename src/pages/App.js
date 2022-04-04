import React from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';
import '../assets/fontawesome-free/css/all.min.css';
import { Routes, store } from '../config';
import { Provider } from 'react-redux';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;

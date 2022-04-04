import React from 'react';
import '../assets/bootstrap/css/bootstrap.min.css';
import { Routers, store } from '../config';
import './App.css';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Routers />
    </Provider>
  );
}

export default App;

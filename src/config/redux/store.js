import { createStore } from "redux";
import reducer from './reducer/reducer';
import thunk from 'redux-thunk';

const applyMiddleware = require("redux").applyMiddleware;

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore} from 'redux' //1. imported createstore
import {carReducer} from './reducers/carReducer' //3 created car reducer and imported here
import {Provider} from 'react-redux' //4. react redux import


import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carReducer); //2. defined create store
// console.log('retrieving store', store.getState())
const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, rootElement);

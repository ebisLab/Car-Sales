import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import App from './App';
import {Provider} from 'react-redux';

import 'bulma/css/bulma.css';
import './styles.scss';
import { Reducer } from './reducer'

const store = createStore(Reducer);
const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={store}><App /></Provider>, rootElement);

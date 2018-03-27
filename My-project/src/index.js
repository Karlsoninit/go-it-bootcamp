import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import {Provider} from 'react-redux'

const initialState = [
    'Exercise :'
]

function list(state = initialState, action) {
    if(action.type === 'ADD'){
        return [
            ...state,
            action.name
        ]
    }
    return state;
}

const store = createStore(list)


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));


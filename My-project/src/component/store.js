// import { createStore } from 'redux';
// import React from 'react';
// import {Provider} from 'react-redux'
// import ReactDom from 'react-dom'
//
//
//
//
// function playlist(state = initialState, action) {
//     if(action.type === 'ADD_TRACK'){
//         return [
//             ...state,
//             action.payload
//         ]
//     }
//     return state;
// }
//
// const store = createStore(playlist)
//
//








// const addTrackButton = document.querySelectorAll('.addTrack')[0];
// const trackInput = document.querySelectorAll('.trackInput')[0];
// const list = document.querySelectorAll('.list')[0];
//
//
// export const store = createStore(playlist);
//
// console.log(store.getState());
//
// store.subscribe(() =>{
//     list.innerHTML = '';
//     trackInput.value = '';
//     store.getState().forEach(track => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     })
// })
//
// addTrackButton.addEventListener('click', () => {
//     const trackName = trackInput.value;
//     store.dispatch({ type: 'ADD_TRACK', payload: trackName });
//
// })



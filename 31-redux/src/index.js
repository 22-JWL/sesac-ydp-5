import React from 'react';
import ReactDOM from 'react-dom/client';
// import App5 from './Bank';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

//크롬 확장프로그램 import
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './store';
import Bank from './Bank';

const root = ReactDOM.createRoot(document.getElementById('root'));

//state 초기값 정의
// const initialState = {
//   number: 50,
// };

//reducer 정의 : 변화를 일으키는 함수
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'PLUS':
//       return { number: state.number + 1 };
//     case 'MINUS':
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };

//store 정의 :전역상태를 관리하는 공간 (하나의 프로젝트에 하나만!)
const store = configureStore({ reducer: rootReducer }, composeWithDevTools());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Bank />
    </Provider>
  </React.StrictMode>
);

import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';

import React from 'react';
import Props from './post';
import photo from '../src/img/sleep.jpg';
import Button from './Button';
import Console from './Console';
function message() {
  console.log('콘솔 띄우기 성공!');
}

function App() {
  return (
    <div className="App">
      <FunctionComponent name="탕수육" />

      <img src={photo} className="book_img"></img>
      <Props
        title="잠이 중요하다"
        author="이재욱"
        price="9,900원"
        type="자기계발서"
      />

      <hr />
      <Console
        text="App 컴포넌트에서 넘겨준 text props입니다."
        valid={message}
      ></Console>
    </div>
  );
}

export default App;

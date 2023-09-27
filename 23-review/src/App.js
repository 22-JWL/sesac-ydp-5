import logo from './logo.svg';
import './App.css';
import React, { fragment } from 'react';
import Counter from './Counter';
import SayFunction from './SayFunction';
import CounterFunction from './CounterFunction';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import CounterBind from './CounterBind';

function App() {
  const name = '리액트';
  const a = 10,
    b = 6;

  return (
    <>
      <div className="App">
        이것은 div입니다. <br />
        <h3>이것은 div 안에 있는 h3 태그 입니다.</h3>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h2>
        제 반려동물의 이름은 <span className="bold">로이</span>입니다. <br />
        <span style={{ fontWeight: 'bold' }}>로이</span>는{' '}
        <span className="bold">강아지</span>입니다.
      </h2>
      {3 + 5 == 8 ? <>정답입니다</> : <>오답입니다.</>}
      <br />

      {(b > a && <>a가 b보다 큽니다</>) || <>b가 a보다 큽니다</>}

      {/* <h1>Hello World</h1> */}

      {/* <div style={ backgrountdColor = }></div> */}
      <div>
        <SayFunction />
        <hr />
        <Counter />
        <hr />

        <CounterFunction />

        <hr />

        <SyntheticEvent />
        <hr />

        <ClassBind />
        <hr></hr>

        <CounterBind />
      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';

function MyButton() {
  return <button>I'm a button</button>;
}

function App() {
  const str = 'hello';
  const name = '레나';
  const student = 'Sesac';
  const styles = {
    // camelCase
    backgroundColor: 'yellow',
    color: 'blue',
    fontSize: '48px',
  };
  const underline = {
    // camelCase
    textDecorationLine: 'underline',
  };
  const animal = '강아지';

  const a = 7,
    b = 8;
  const title = 'Hello World';
  return (
    <>
      <div className="App">
        <span>{str}</span>
        <span>world</span>
      </div>
      <div>
        <h1>Welco to my hack</h1>
        <MyButton />
      </div>

      {/*js 문법 사용 
      - {}로 감싸면 js 표현식 사용 가능
      - {}안에서 삼항 연산자 사용 가능 (if, for문 사용 불가X)
        */}

      <div>{name} 안녕?</div>
      <div>
        대문자만 달라도 다르다고 판단<br></br>
        {student === 'sesac' ? <span>새싹인</span> : <span>새싹이 뭐지</span>}
      </div>

      {/*3. style 속성
        - 리액트에서 dom 요소에 스타일 적용시 문자열 x -> 객체 사용
        - 스타일 이름 중 하이픈 (-) 포함 시 camelCase로 작성해야 함 (ex. backgroundColor)
        */}
      <div style={styles}>스타일 적용</div>
      <div
        style={{
          backgroundColor: 'yellow',
          color: 'blue',
          fontSize: '48px',
        }}
      >
        스타일 적용 2
      </div>

      <div>이것은 div입니다</div>
      <div>
        <h3>이것은 div 안에 있는 h3 태그 입니다</h3>
      </div>
      <div>
        <h2>
          제 반려 동물의 이름은 <span style={underline}>{name}</span>입니다.{' '}
          <span style={underline}>{name}</span>는{' '}
          <span style={underline}>{animal}</span>입니다.
        </h2>
      </div>
      <div>
        1. 삼항 연산자를 사용하여 3 + 5 == 8 이란 수식이 맞으면 "정답입니다!"
        를, 틀리면 "오답입니다!" 를 출력하도록 해주세요.
        <br />
        {3 + 5 == 8 ? <span>정답입니다!</span> : <span>오답입니다!</span>}
      </div>

      <div>
        1. a라는 변수와 b라는 변수를 만들고 각각에 숫자(정수)를 넣어주세요. 2.
        &&연산자를 이용하여 a가 b보다 크다면 "a가 b보다 큽니다"를 출력하도록
        해주세요. a={a}, b={b}
        <br />
        {a > b ? (
          <span>a가 b보다 큽니다</span>
        ) : (
          <span>a가 b보다 작습니다</span>
        )}
      </div>

      <div className="test">{title}</div>
      <div className="input">
        아이디 : <input></input>
      </div>
      <div className="input">
        비밀번호 : <input></input>
      </div>

      <div className="all">
        <div className="red"></div>
        <div className="orange"></div>
        <div className="yellow"></div>
        <div className="green"></div>
        <div className="blue"></div>
        <div className="navy"></div>
        <div className="purple"></div>
      </div>

      {/*4. className 사용
        - class 속성이 아닌 className  속성 사용 (ex. <div className ="App">)

        5. 종료 태그가 없는 태그 사용
        -기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 함 or self-closing
        -<input /> or <input></input>
        
        6. 주석
        - // :jsx 외부 주석
        - {*  *} : jsx내부 주석
        */}
    </>
  );
}

export default App;

import React, { Component } from 'react';

class Counter extends Component {
  //기존 버전
  constructor(props) {
    //js에서 'super'는 부모클래스 생성자의 참조
    //super()호출시 현재 클래스가 상속받고 있는 리액트의Componenet 클래스가 지닌 생성자 함수를 호출한다.
    super(props);

    this.state = {
      number: 0,
    };
  }

  render() {
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
        <button
          onClick={() => {
            this.setState({ number: number - 1 });
          }}
        >
          -1
        </button>
        <button onClick={() => alert(number)}>Alert number</button>
      </div>
    );
  }
}
export default Counter;

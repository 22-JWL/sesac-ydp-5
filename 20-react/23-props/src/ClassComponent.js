import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ClassComponent extends Component {
  // 클래스형 컴포넌트는 render 함수 필수

  student = '이재훈';
  render() {
    const { name } = this.props;
    return (
      <div>
        {/* this를 꼭 넣어주어야 한다! */}
        <h1>HI {this.student}!</h1>
        <p>여기는 ClassComponent</p>
        {/* <p>
          새로운 컴포넌트의 이름은 <b>{this.props.name}</b>
        </p> */}
        <p>
          새로운 컴포넌트의 이름은 <b>{name}</b>
        </p>
      </div>
    );
  }
  //   static defaultProps = {
  //     name: '기본 이름',
  //   };

  //   static propTypes = {
  //     name: this.propTypes.string,
  //   };
  // }
}
ClassComponent.defaultProps = {
  name: '기본 이름',
};

ClassComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ClassComponent;

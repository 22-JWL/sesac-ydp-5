import { useState } from 'react';

const HandlerFunction = (props) => {
  const [title, setTitle] = useState('안녕하세요');
  const [buttonTxt, setButtonTxt] = useState('사라져라');

  //   const Decrease = () => {
  //     setNumber(number - 2);
  //   };
  const toggle = () => {
    if (buttonTxt === '사라져라') {
      setTitle('');
      setButtonTxt('나타나라');
    } else {
      setTitle('안녕하세요');
      setButtonTxt('사라져라');
    }
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={toggle}>{buttonTxt}</button>
    </div>
  );
};

export default HandlerFunction;

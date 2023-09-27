import { useState } from 'react';

const CounterFunction = (props) => {
  const [number, setNumber] = useState(0);
  const Increase = () => {
    setNumber(number + 1);
  };

  const Decrease = () => {
    setNumber(number - 2);
  };
  const { value } = props;

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={Increase}>+1</button>
      <button onClick={Decrease}>-2</button>
    </div>
  );
};

export default CounterFunction;

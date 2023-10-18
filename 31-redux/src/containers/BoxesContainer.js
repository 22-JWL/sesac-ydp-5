import { useDispatch, useSelector } from 'react-redux';
import { Box1, Box2, Box3, Box4 } from '../App4';
import { minus, plus } from '../store/counterReducer';
//export 할때는 막 한번에 해도되는데 import
// 괄호는 객체구조분해로 가져오는 것 이다

export const Box1Container = () => {
  return <Box1 />;
};
export const Box2Container = () => {
  return <Box2 />;
};
export const Box3Container = () => {
  return <Box3 />;
};

export const Box4Container = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  //   dispatch ( { type:, payload: })
  return (
    <Box4
      //prop으로 내리는 코드들임
      number={number}
      onPlus={() => dispatch(plus())}
      onMinus={() => dispatch(minus())}
    />
  );
};

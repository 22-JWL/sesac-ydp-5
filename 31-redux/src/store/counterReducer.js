const PLUS = 'counter/PLUS'; /// counter/는 관례로 어디쓰이는 puls인지 알려줌
const MINUS = 'counter/MINUS';

//plus() , minus()
//나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록
export const plus = () => ({ type: PLUS }); //return{type:'counter/PLUS'}
export const minus = () => ({ type: MINUS }); //return{type:'counter/MINUS'}

// state 초기값 정의
const initialState = {
  number: 50,
};

// reducer 정의 : 변화를 일으키는 함수
const counterReducer = (state = initialState, action) => {
  //action:객체
  switch (action.type) {
    // {type:'counter/PLUS'}로 보내줄때는 'PLUS' => PLUS로 받아와야 한다.
    // 입력한 수 에서 입금을 누르면 + 출금을 누르면 -, 잔액 출력

    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};
export default counterReducer;

//왜 counter를 한번 더 타야하는 구조가 되었을까?
// const rootReducer = combineReducers({
//   counter: counterReducer,
// });

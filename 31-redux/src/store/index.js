// 여러개 reducer 집합
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import bankDepositWithdrawal from './bankDepositWithdrawal';

//combineReducers메서드 : 여러개의 리듀서를 하나로 합침
const rootReducer = combineReducers({
  bank: bankDepositWithdrawal,
  counter: counterReducer,
  isVisible: isVisibleReducer,
});

export default rootReducer;

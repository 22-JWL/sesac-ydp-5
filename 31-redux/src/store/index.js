// 여러개 reducer 집합
import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';

//combineReducers메서드 : 여러개의 리듀서를 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
});

export default rootReducer;

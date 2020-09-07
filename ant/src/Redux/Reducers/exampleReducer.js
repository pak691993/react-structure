import { createReducer } from '../../Utils/Helpers';
import { fromJS } from 'immutable';
const initialState = fromJS({
  count: 0,
});

const actionMap = {
  // [actionTypes.increment]: (state, action) => {
  //   return {
  //     ...state,
  //     count: state.count + 1,
  //   };
  // },
  // [actionTypes.decrement]: (state, action) => {
  //   return {
  //     ...state,
  //     count: state.count - 1,
  //   };
  // },
  // [actionTypes.setCount]: (state, action) => {
  //   return {
  //     ...state,
  //     count: action.count,
  //   };
  // },
};

export const exampleReducer = createReducer(initialState, actionMap);


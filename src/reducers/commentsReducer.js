import { SAVE_COMMENT } from '../actions/types';

const INITIAL_STATE = [];
export default function(state = INITIAL_STATE, action){
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};

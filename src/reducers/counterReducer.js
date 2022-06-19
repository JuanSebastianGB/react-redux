import {
  DECREMENT,
  DECREMENT_5,
  INCREMENT,
  INCREMENT_5,
  RESET,
} from '../types/index';

const initialState = 0;
/**
 * The counterReducer function takes in a state and an action, and returns a new state based on the
 * action type
 * @param [state] - This is the current state of the store.
 * @param action - This is the action object that is dispatched from the store.
 * @returns The state is being returned.
 */
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCREMENT_5:
      return state + action.payload;
    case DECREMENT_5:
      return state - action.payload;
    case RESET:
      return initialState;
    default:
      return state;
  }
};
export default counterReducer;

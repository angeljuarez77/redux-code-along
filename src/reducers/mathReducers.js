// import action type
import {
  ADD_NUMBER,
  SUBTRACT_NUMBER,
  MULTIPLY_NUMBER,
  DIVIDE_NUMBER
} from '../actions/mathOperations';

// create initial state just incase one didn't exist before
const initialState = {
  number: 0,
}

// you create your switch handling each action type
export function mathReducer(state = initialState, action) {
  switch(action.type) {
    case ADD_NUMBER:
      return Object.assign({}, state, {
        number: state.number + action.number
      })
    case SUBTRACT_NUMBER:
      return Object.assign({}, state, {
        number: state.number - action.number
      })
    case MULTIPLY_NUMBER:
      return Object.assign({}, state, {
        number: state.number * action.number
      })
    case DIVIDE_NUMBER:
      return Object.assign({}, state, {
        number: state.number / action.number
      })
    default:
      return state
  }
}
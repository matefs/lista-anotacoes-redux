// reducers.js
import { ADD_TODO } from './actions';

const initialState = {
  todos: [],
};

function todoApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case IMPRIME:
      return {
        ...state,
        todos: [...state.todos, ]
      }
    default:
      return state;
  }
}

export default todoApp;

// reducers.js
import { ADD_TODO } from './actions';
import {IMPRIME } from './actions';

const initialState = {
  todos: [],
  outro: []
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
        outros: [...state.outros]
      }
    default:
      return state;
  }
}

export default todoApp;

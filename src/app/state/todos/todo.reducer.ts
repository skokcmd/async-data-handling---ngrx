import {Todo} from '../../shared/todo.model';
import {createReducer, on} from '@ngrx/store';
import {createTodo, removeTodo} from './todo.actions';

// defining state type
export interface TodoState {
  todos: Array<Todo>;
  error: string | null;
  status: 'pending' | 'loading' | 'error' | 'success';
}

// initial state passed to the reducer
export const initialState: TodoState = {
  todos: [],
  error: null,
  status: 'pending',
};

export const todoReducer = createReducer(
  initialState,
  // on create action listener
  on(createTodo, (state, { content }) => ({
    ...state,
    todos: [...state.todos, { id: state.todos.length + 1, content }],
  })),
  // on remove action listener
  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter((todo) => todo.id !== id),
  }))
  // // on load todos listener
  // on(loadTodos, (state) => ({
  //   ...state,
  //   status: 'loading',
  // })),
  // // on load success listener
  // on(loadTodosSuccess, (state, { todos }) => ({
  //   ...state,
  //   todos: todos,
  //   error: null,
  //   status: 'success',
  // }))
);

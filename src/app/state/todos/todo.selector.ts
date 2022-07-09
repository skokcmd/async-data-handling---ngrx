import { AppState } from '../app.state';
import { createSelector } from '@ngrx/store';
import { TodoState } from './todo.reducer';

export const selectTodos = (state: AppState) => state.todos;
export const selectAllTodos = createSelector(
  selectTodos,
  (state: TodoState) => state.todos
);

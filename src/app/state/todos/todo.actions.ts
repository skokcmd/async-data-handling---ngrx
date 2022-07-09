import { createAction, props } from '@ngrx/store';
import { Todo } from '../../shared/todo.model';

export const createTodo = createAction(
  '[Todo] add todo',
  props<{ content: string }>()
);

export const removeTodo = createAction(
  '[Todo] remove todo',
  props<{ id: number }>()
);

export const loadTodos = createAction('[Todo] load todos');

export const loadTodosSuccess = createAction(
  '[Todo API] loaded todos',
  props<{ todos: Todo[] }>()
);

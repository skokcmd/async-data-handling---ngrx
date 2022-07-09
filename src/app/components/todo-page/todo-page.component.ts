import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import {
  createTodo,
  loadTodos,
  removeTodo,
} from '../../state/todos/todo.actions';
import { selectAllTodos } from '../../state/todos/todo.selector';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  // allTodos$ = this.store.select((state) => state.todos.todos);
  allTodos$ = this.store.select(selectAllTodos);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadTodos());
  }

  addTodo(content: string) {
    this.store.dispatch(createTodo({ content }));
  }

  removeTodo(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }
}

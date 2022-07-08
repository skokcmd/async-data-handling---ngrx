import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Todo } from './todo.model';

const todoList: Todo[] = [
  { id: 1, content: 'new todo' },
  { id: 2, content: 'another one' },
];

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos$: BehaviorSubject<Todo[]> = new BehaviorSubject<Todo[]>([]);
  private loaded = false;

  constructor() {}

  loadTodos() {
    this.todos$.next(todoList);
  }

  getTodos() {
    if (!this.loaded) {
      this.loadTodos();
      this.loaded = true;
    }
    return this.todos$;
  }

  addTodo(content: string) {
    this.todos$.next([
      ...this.todos$.value,
      { id: this.todos$.value.length + 1, content },
    ]);
  }

  removeTodo(id: number) {
    this.todos$.next(this.todos$.value.filter((todo) => todo.id !== id));
  }
}

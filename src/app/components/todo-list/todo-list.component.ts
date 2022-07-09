import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../shared/todo.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input()
  allTodos$: BehaviorSubject<Todo[]> | Observable<Todo[]>;
  todo: string;

  @Output()
  onAddTodo: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  onRemoveTodo: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  addTodo(content: string) {
    this.onAddTodo.emit(content);
    this.todo = '';
  }

  removeTodo(id: number) {
    this.onRemoveTodo.emit(id);
  }
}
